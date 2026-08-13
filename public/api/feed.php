<?php
/**
 * HERO Tax · News-Feed-Proxy
 * ─────────────────────────────────────────────────────────────────
 * Holt offizielle RSS-Feeds von Bundesbehörden serverseitig (umgeht
 * Browser-CORS-Sperren dieser Domains), normalisiert sie zu JSON und
 * cached das Ergebnis kurzzeitig als Datei.
 *
 * NUR fest hinterlegte Quellen sind erlaubt (kein beliebiger ?url=
 * Parameter) — verhindert, dass dieser Endpunkt als offener Proxy
 * für beliebige URLs (SSRF) missbraucht werden kann.
 *
 * Aufruf: /api/feed.php?source=bmf-steuern|bmds|bsi
 */

declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');
header('Cache-Control: public, max-age=900');

// Kein "*" — nur die eigene Domain darf den Proxy per XHR/fetch aus dem
// Browser ansprechen.
const ALLOWED_ORIGINS = [
    'https://herotax.de',
    'https://www.herotax.de',
];
$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
if (in_array($origin, ALLOWED_ORIGINS, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
}

// Nur lesende Zugriffe
$method = $_SERVER['REQUEST_METHOD'] ?? 'GET';
if ($method === 'OPTIONS') {
    header('Access-Control-Allow-Methods: GET, HEAD, OPTIONS');
    http_response_code(204);
    exit;
}
if (!in_array($method, ['GET', 'HEAD'], true)) {
    http_response_code(405);
    header('Allow: GET, HEAD, OPTIONS');
    echo json_encode(['status' => 'method_not_allowed', 'items' => []]);
    exit;
}

const SOURCES = [
    'bmf-steuern' => [
        'url' => 'https://www.bundesfinanzministerium.de/SiteGlobals/Functions/RSSFeed/DE/Steuern/RSSSteuern.xml',
        'label' => 'Bundesfinanzministerium',
    ],
    'bmds' => [
        'url' => 'https://bmds.bund.de/feed',
        'label' => 'BMDS · Bundesministerium für Digitales und Staatsmodernisierung',
    ],
    'bsi' => [
        'url' => 'https://www.bsi.bund.de/SiteGlobals/Functions/RSSFeed/RSSNewsfeed/RSSNewsfeed_Presse_Veranstaltungen.xml',
        'label' => 'BSI · Bundesamt für Sicherheit in der Informationstechnik',
    ],
];

const CACHE_TTL = 14400; // 4 Stunden (14400 Sekunden)
const MAX_ITEMS = 6;

function respond(array $items, string $status = 'ok'): void
{
    echo json_encode(['status' => $status, 'items' => $items], JSON_UNESCAPED_UNICODE);
    exit;
}

function germanDate(string $pubDate): string
{
    $ts = strtotime($pubDate);
    if (!$ts) {
        return $pubDate;
    }
    static $months = [
        1 => 'Januar', 2 => 'Februar', 3 => 'März', 4 => 'April', 5 => 'Mai', 6 => 'Juni',
        7 => 'Juli', 8 => 'August', 9 => 'September', 10 => 'Oktober', 11 => 'November', 12 => 'Dezember',
    ];
    return sprintf('%02d. %s %d', (int) date('d', $ts), $months[(int) date('n', $ts)], (int) date('Y', $ts));
}

function excerpt(string $text, int $maxLen = 180): string
{
    $text = trim(preg_replace('/\s+/', ' ', strip_tags($text)));
    if (mb_strlen($text) <= $maxLen) {
        return $text;
    }
    return mb_substr($text, 0, $maxLen - 1) . '…';
}

function fetchFeed(string $url): string|false
{
    if (function_exists('curl_init')) {
        $ch = curl_init();
        curl_setopt_array($ch, [
            CURLOPT_URL => $url,
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_TIMEOUT => 8,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_USERAGENT => 'herotax.de-feed-proxy/1.0',
            CURLOPT_SSL_VERIFYPEER => true,
        ]);
        $res = curl_exec($ch);
        curl_close($ch);
        if ($res !== false && strlen($res) > 0) {
            return $res;
        }
    }
    $context = stream_context_create([
        'http' => [
            'method' => 'GET',
            'header' => "User-Agent: herotax.de-feed-proxy/1.0\r\n",
            'timeout' => 8,
        ],
        'ssl' => ['verify_peer' => true, 'verify_peer_name' => true],
    ]);
    return @file_get_contents($url, false, $context);
}

function parseFeed(string $xmlRaw, string $sourceLabel): array
{
    if (function_exists('libxml_disable_entity_loader')) {
        @libxml_disable_entity_loader(true);
    }
    $prev = libxml_use_internal_errors(true);
    // LIBXML_NONET verbietet dem Parser jeden Netzwerkzugriff beim Auflösen
    // externer Entities (XXE/SSRF über einen manipulierten Feed).
    $xml = simplexml_load_string($xmlRaw, 'SimpleXMLElement', LIBXML_NONET);
    libxml_use_internal_errors($prev);

    if ($xml === false) {
        return [];
    }

    $items = [];
    $nodes = $xml->channel->item ?? $xml->entry ?? [];

    foreach ($nodes as $node) {
        $title = trim((string) $node->title);
        $link = trim((string) $node->link);
        if ($link === '' && isset($node->link['href'])) {
            $link = trim((string) $node->link['href']);
        }
        $rawDate = (string) ($node->pubDate ?? $node->updated ?? $node->published ?? '');
        $description = (string) ($node->description ?? $node->summary ?? '');

        // Validierung: Nur http / https URLs erlauben
        if ($title === '' || $link === '' || !preg_match('#^https?://#i', $link)) {
            continue;
        }

        $items[] = [
            'title' => $title,
            'excerpt' => excerpt($description),
            'date' => germanDate($rawDate ?: 'now'),
            'source' => ['label' => $sourceLabel, 'href' => $link],
        ];

        if (count($items) >= MAX_ITEMS) {
            break;
        }
    }

    return $items;
}

// is_string(): ?source[]=… würde sonst ein Array liefern und PHP 8 beim
// Array-Zugriff mit einem TypeError abbrechen lassen.
$source = $_GET['source'] ?? '';
if (!is_string($source) || !isset(SOURCES[$source])) {
    http_response_code(400);
    respond([], 'invalid_source');
}

$config = SOURCES[$source];
$cacheDir = __DIR__ . '/cache';
$cacheFile = $cacheDir . '/' . $source . '.json';

// 1) Frischen Cache direkt ausliefern
if (is_readable($cacheFile) && (time() - filemtime($cacheFile)) < CACHE_TTL) {
    $cached = json_decode((string) file_get_contents($cacheFile), true);
    if (is_array($cached)) {
        respond($cached, 'cached');
    }
}

// 2) Feed live holen
$raw = fetchFeed($config['url']);
if ($raw !== false) {
    $items = parseFeed($raw, $config['label']);
    if (!empty($items)) {
        if (!is_dir($cacheDir)) {
            @mkdir($cacheDir, 0755, true);
        }
        if (is_dir($cacheDir) && is_writable($cacheDir)) {
            @file_put_contents($cacheFile, json_encode($items, JSON_UNESCAPED_UNICODE));
        }
        respond($items, 'fresh');
    }
}

// 3) Fallback: veralteten Cache liefern, falls vorhanden
if (is_readable($cacheFile)) {
    $stale = json_decode((string) file_get_contents($cacheFile), true);
    if (is_array($stale)) {
        respond($stale, 'stale');
    }
}

// 4) Kein Cache, kein Live-Feed — leer zurückgeben (Frontend fällt auf statische Daten zurück)
respond([], 'unavailable');
