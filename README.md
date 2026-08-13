# HERO Tax 🛡️

**[herotax.de](https://herotax.de)** — Finanz-Intelligenz-Plattform für Berliner Unternehmer:innen. KI-gestützte Prozesse, Steuer-News mit Quellenangabe, praktische Tools und eine EU-Wallet-Übersicht — alles ohne Cookie-Banner, ohne Tracking-Profile.

Das Projekt ist öffentlich, weil Transparenz Teil des Anspruchs ist: Wer über Steuern und Datenschutz schreibt, muss offenlegen, wie die eigene Plattform gebaut ist.

> Dieses Repository enthält den Quellcode der Seite. Es wird automatisch aus
> dem privaten Entwicklungs-Repository gespiegelt; die Auslieferung an den
> Hoster und alles, was dazugehört, bleibt dort.

## Was die Seite macht

- **News-Hub** — kuratierte Meldungen zu Steuern, KI-Regulierung und Digitalisierung, jede mit Primärquelle (BMF, BMDS, BSI, IHK Berlin, …); dazu ein DE-Ökosystem-Bereich mit kuratierter Verlinkung zu [DeutschlandGPT](https://www.deutschlandgpt.de/) (`DEUTSCHLANDGPT_LINKS` in `src/data/articles.js`)
- **Light / Dark Mode Switcher** — Nahtloser Theme-Wechsel im Header (Sonne/Mond Toggle) mit automatischer System-Erkennung (`prefers-color-scheme`), `localStorage`-Persistenz und „Deep Midnight Blue Blueprint“ Ästhetik
- **Live-Feeds & Live Tracker** — ein serverseitiger PHP-Proxy (`public/api/feed.php`) holt RSS-Feeds offizieller Behörden, cached sie 4 Stunden (14.400s) und liefert sie CORS-frei aus; dazu zeigt der Live Tracker (`LiveTrackerBadge.jsx`: "Live · Stand: DD.MM.YYYY, HH:mm Uhr (alle 4 Std.)") den genauen Aktualisierungsstand samt manuellem Refresh-Button; fällt der Live-Abruf aus, greift automatisch die kuratierte Fallback-Liste in `src/data/articles.js`
- **Tools** — Umsatzsteuer-Rechner, Fristen-Check, ein interaktiver Gründungs-Guide für Berlin
- **EUDI-Wallet-Bereich** — Stand & Zeitplan der europäischen digitalen Brieftasche, mit offiziellen Quellen (EU-Kommission, BMDS, Verbraucherzentrale, Open-Code-Referenzimplementierung des Bundes)
- **Datenschutz & Compliance** — eigene DSGVO-Selbstverpflichtung, ein "Datenschutz-Radar" mit BfDI-Themen sowie ein Bereich mit BfDI-Publikationen (Broschüren, Flyer, Pixi-Bücher, Unterrichtsmaterial, Mediathek)
- **Mehrsprachigkeit** — Deutsch, Englisch, Türkisch, Arabisch (RTL) und Kurdisch (Kurmancî)
- **EU-KI-Kennzeichnung** — die Seite ist KI-generiert und weist das offiziell aus (`src/components/atoms/AILabel.jsx`)

## Tech-Stack

- [React 19](https://react.dev) + [Vite](https://vite.dev)
- [Tailwind CSS v4](https://tailwindcss.com)
- [lucide-react](https://lucide.dev) für Icons
- Kein Backend-Framework — Inhalte sind statische Daten (`src/data/`) plus ein schlanker PHP-Feed-Proxy für Live-News
- [Oxlint](https://oxc.rs) für Linting

## Projektstruktur

```
src/
  theme.jsx      ThemeProvider, ThemeContext & useTheme Hook für Light/Dark Mode
  components/
    atoms/       kleine wiederverwendbare Bausteine (Icons, Sprachwahl, ThemeSwitcher, LiveTrackerBadge, ...)
    sections/    Seitenabschnitte (Header, Hero, News-Hub, Tools, Footer, ...)
    tools/       interaktive Rechner/Guides
    pages/       eigenständige Seiten (Datenschutzerklärung)
  data/          statische Inhalte (Artikel, Guide-Schritte, EUDI-Wallet, Datenschutz-Themen)
  i18n/          Übersetzungslogik + locales/ (de, en, tr, ar, ku)
  services/      articleService.js — Feed-Abruf, 4-Std-Caching & Live-Tracker
  config/        Konfiguration (Links, Kontakt, Design-Tokens)
public/
  404.html       echte Fehlerseite (ErrorDocument 404/403)
  robots.txt     Crawler-Steuerung (Suchmaschinen ja, KI-Training nein)
  api/feed.php   Feed-Proxy für RSS-Quellen der Behörden (4-Std-Cache)
scripts/
  sitemap.mjs    Vite-Plugin, erzeugt sitemap.xml beim Build aus dem Router
```

## Entwicklung

```bash
npm install
npm run dev              # Dev-Server (Vite)
npm run build            # Produktions-Build nach /dist
npm run preview          # Build lokal testen
npm run lint             # Oxlint
```

> Die `sitemap.xml` entsteht beim Build automatisch aus den Routen in
> `src/App.jsx` — eine neue Seite landet dort ohne weiteres Zutun.

## Sicherheit

Die Seite ist gegen automatisiertes Massenscanning gehärtet: WordPress- und
Webshell-Pfade werden serverseitig abgewiesen, Dotfiles und
Konfigurationsdateien sind gesperrt, und unbekannte Pfade liefern einen echten
HTTP 404 statt stillschweigend die Startseite. Ein Smoketest prüft das
regelmäßig gegen die Live-Seite. Die Serverkonfiguration und die Prüfwerkzeuge
liegen im privaten Repository.

## Rechtlicher Hinweis

Redaktionelle Inhalte — kein Steuerberatungs-Ersatz (§ 5 StBerG). Die Datenschutzerklärung liegt unter [`/datenschutz`](https://herotax.de/datenschutz).

## Kontakt

- Web: [herotax.de](https://herotax.de)
- E-Mail: info@herotax.de
- [LinkedIn](https://www.linkedin.com/in/orhankahraman/) · [Instagram](https://instagram.com/herotaxberlin) · [TikTok](https://tiktok.com/@herotaxberlin) · [YouTube](https://www.youtube.com/@herotaxberlin) · [X](https://x.com/HeroTaxBerlin)
