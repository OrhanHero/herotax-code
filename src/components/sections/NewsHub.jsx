import { useState, useEffect, useMemo } from "react";
import { ArrowUpRight, ExternalLink, Sparkles, Home, Newspaper, Trophy, FileText, Scale, ClipboardCheck } from "lucide-react";
import { useLang } from "../../i18n";
import { T, fontDisplay, fontMono, cardBase } from "../../config/tokens";
import { ARTICLES, DEUTSCHLANDGPT_LINKS } from "../../data/articles";
import { getArticles } from "../../services/articleService";
import Eyebrow from "../atoms/Eyebrow";
import CategoryTag from "../atoms/CategoryTag";
import Meta from "../atoms/Meta";
import SourceLink from "../atoms/SourceLink";
import LiveTrackerBadge from "../atoms/LiveTrackerBadge";
import FernsehturmBadge from "../atoms/FernsehturmBadge";
import BerlinBezirkSelector from "../atoms/BerlinBezirkSelector";

/* Wahl zum Abgeordnetenhaus von Berlin — 20. September 2026 (Monat ist 0-basiert). */
const ELECTION_DAY = new Date(2026, 8, 20);

/** Verbleibende Tage bis zur Wahl, ab Tagesbeginn gerechnet, damit der Wert
    nicht von der Uhrzeit des Seitenaufrufs abhängt. Negativ nach dem Wahltag. */
const daysUntilElection = () => {
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  return Math.round((ELECTION_DAY - startOfToday) / 86_400_000);
};

const DE_ICONS = {
  home: Home,
  blog: Newspaper,
  "case-studies": Trophy,
  ressourcen: FileText,
  vergleich: Scale,
  "ki-starter-check": ClipboardCheck,
};

/** Säule 02 · News-Hub mit Kategorie-Filter */
const NewsHub = () => {
  const { t } = useLang();
  const [filter, setFilter] = useState("Alle");
  const [articles, setArticles] = useState(ARTICLES);
  const daysLeft = useMemo(daysUntilElection, []);

  // Lade Artikel beim Mount (mit Caching & automatischem Update)
  useEffect(() => {
    getArticles("general").then((data) => {
      setArticles(data);
    });
  }, []);

  /* Interne Filter-Werte bleiben stabil (matchen die cat-Felder);
     nur das Label von "Alle" wird übersetzt. "Berlin Fokus" und
     "Bund & Steuer" sind Marken-Rubriken und bleiben in allen
     Sprachen gleich — wie Eigennamen. */
  const filters = ["Alle", "Berlin Fokus", "Bund & Steuer"];
  const filterLabel = (f) => (f === "Alle" ? t("news.all") : f);
  const visible = articles.filter((a) => filter === "Alle" || a.cat === filter);
  const featured = visible.find((a) => a.featured) || visible[0];
  const rest = visible.filter((a) => a !== featured);

  const refreshArticles = async () => {
    const data = await getArticles("general");
    setArticles(data);
  };

  return (
    <section className="py-24 border-t bg-blueprint-grid" style={{ borderColor: T.lineSoft }} id="news">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
          <div className="flex items-center gap-3">
            <Eyebrow index="02">{t("news.eyebrow")}</Eyebrow>
            <FernsehturmBadge label="HAUPTSTADT KIOSK" />
          </div>
          <LiveTrackerBadge type="general" onRefresh={refreshArticles} />
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight max-w-xl" style={{ ...fontDisplay, color: T.text }}>
            {t("news.t1")}
            <br />
            <span style={{ color: T.faint }}>{t("news.t2")}</span>
          </h2>
          <div
            className="inline-flex p-1 rounded-full self-start sm:self-auto"
            style={{ backgroundColor: T.wash, border: `1px solid ${T.line}` }}
            role="tablist"
            aria-label="News-Kategorie wählen"
          >
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={filter === f}
                onClick={() => setFilter(f)}
                className="px-4 py-2 rounded-full text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2"
                style={{
                  ...fontDisplay,
                  backgroundColor: filter === f ? T.blue : "transparent",
                  color: filter === f ? T.blueInk : T.muted,
                }}
              >
                {filterLabel(f)}
              </button>
            ))}
          </div>
        </div>

        {/* Special Election Banner for Berlin Fokus */}
        {filter === "Berlin Fokus" && (
          <div className="mb-8 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white border border-blue-400/30 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
            <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <div className="inline-flex flex-wrap items-center gap-2 mb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-mono font-bold uppercase tracking-wider">
                    <span className="w-2 h-2 rounded-full bg-blue-400 animate-ping" />
                    Amtliches Wahlportal 2026
                  </div>
                  {daysLeft >= 0 && (
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-400/20 border border-amber-300/40 text-amber-300 text-xs font-mono font-bold uppercase tracking-wider">
                      {daysLeft === 0
                        ? "🗳️ Heute ist Wahltag"
                        : `⏳ Noch ${daysLeft} ${daysLeft === 1 ? "Tag" : "Tage"} bis zur Wahl`}
                    </div>
                  )}
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight mb-2" style={{ ...fontDisplay }}>
                  Berliner Wahlen am 20. September 2026
                </h3>
                <p className="text-sm sm:text-base text-blue-100/90 leading-relaxed">
                  Wahl zum Abgeordnetenhaus von Berlin (AGH) & allen 12 Bezirksverordnetenversammlungen (BVV). Offizielle Informationen der Landeswahlleiterin Berlin.
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 shrink-0">
                <a
                  href="https://www.bpb.de/themen/wahl-o-mat/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-1.5 shadow-md"
                  title="Der Wahl-O-Mat zur Abgeordnetenhauswahl in Berlin wird am 24. August gegen Mittag unter wahl-o-mat.de veröffentlicht."
                  style={{ ...fontDisplay }}
                >
                  <span>🗳️ Wahl-O-Mat Berlin (Ab 24. Aug.)</span>
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="https://www.berlin.de/wahlen/pressemitteilungen/2026/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-1.5 shadow-md"
                  style={{ ...fontDisplay }}
                >
                  <span>Pressemitteilungen 2026</span>
                  <ArrowUpRight size={16} />
                </a>
                <a
                  href="https://www.berlin.de/wahlen/organisation/wahlhelfende/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white border border-white/20 font-bold text-xs sm:text-sm transition-colors inline-flex items-center gap-1.5"
                  style={{ ...fontDisplay }}
                >
                  <span>25.000 Wahlhelfende gesucht</span>
                  <ArrowUpRight size={16} />
                </a>
              </div>
            </div>
          </div>
        )}

        {filter === "Berlin Fokus" && <BerlinBezirkSelector />}

        <div className="grid lg:grid-cols-3 gap-5">
          {featured && (
            <a
              href={featured.source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="lg:col-span-2 lg:row-span-2 group glass-card card-lift rounded-3xl p-8 sm:p-12 flex flex-col justify-between transition-all duration-300 relative overflow-hidden hover:border-blue-300 block text-left cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between gap-4 mb-6">
                  <CategoryTag cat={featured.cat} />
                  <span className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-400/30 flex items-center justify-center text-blue-600 dark:text-blue-300 group-hover:bg-blue-600 group-hover:text-white transition-all shrink-0">
                    <ArrowUpRight size={20} />
                  </span>
                </div>

                {featured.highlight && (
                  <div className="flex-1 flex items-center gap-6 sm:gap-8 py-6 mb-4">
                    <div className="shrink-0">
                      <div className="text-5xl sm:text-6xl font-black tracking-tight" style={{ ...fontDisplay, color: T.blue }}>
                        {featured.highlight.value}
                      </div>
                      {featured.highlight.compare && (
                        <div className="mt-1.5">
                          <span className="inline-block text-xs font-bold font-mono uppercase tracking-wider px-2.5 py-1 rounded-md bg-blue-100 dark:bg-blue-500/20 text-blue-800 dark:text-blue-200 border border-blue-200 dark:border-blue-400/30">
                            {featured.highlight.compare}
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="h-14 w-px shrink-0" style={{ backgroundColor: T.line }} />
                    <p className="text-sm sm:text-base leading-relaxed max-w-xs" style={{ color: T.muted }}>
                      {featured.highlight.label}
                    </p>
                  </div>
                )}

                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight mb-3 group-hover:text-blue-600 transition-colors" style={{ ...fontDisplay, color: T.text }}>
                  {featured.title}
                </h3>
                <p className="text-base leading-relaxed mb-4 max-w-2xl" style={{ color: T.muted }}>
                  {featured.excerpt}
                </p>

                {/* Kleine farbliche Bulletpoint-Karten (Wahlen 2026 Schnell-Navigation) */}
                <div className="my-6 pt-4 border-t" style={{ borderColor: T.lineSoft }}>
                  <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ ...fontMono, color: T.faint }}>
                    Amtliche Unterlagen & Direkt-Services:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    <a
                      href="https://www.berlin.de/wahlen/wahlen/berliner-wahlen-2026/allgemeine-informationen/artikel.1578239.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all hover:scale-[1.02] bg-blue-50/80 dark:bg-blue-500/15 hover:bg-blue-100 dark:hover:bg-blue-500/25 border-blue-200 dark:border-blue-400/25 text-blue-900 dark:text-blue-200"
                    >
                      <span className="w-2 h-2 rounded-full bg-blue-500 shrink-0 animate-pulse" />
                      <span className="truncate">Allgemeine Informationen</span>
                    </a>
                    <a
                      href="https://www.berlin.de/wahlen/wahlen/berliner-wahlen-2026/wahllokalsuche/artikel.1701445.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all hover:scale-[1.02] bg-emerald-50/80 dark:bg-emerald-500/15 hover:bg-emerald-100 dark:hover:bg-emerald-500/25 border-emerald-200 dark:border-emerald-400/25 text-emerald-900 dark:text-emerald-200"
                    >
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0 animate-pulse" />
                      <span className="truncate">Wahllokalsuche & Musterstimmzettel</span>
                    </a>
                    <a
                      href="https://www.berlin.de/wahlen/wahlen/berliner-wahlen-2026/wahlvorschlaege/artikel.1600254.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all hover:scale-[1.02] bg-indigo-50/80 dark:bg-indigo-500/15 hover:bg-indigo-100 dark:hover:bg-indigo-500/25 border-indigo-200 dark:border-indigo-400/25 text-indigo-900 dark:text-indigo-200"
                    >
                      <span className="w-2 h-2 rounded-full bg-indigo-500 shrink-0 animate-pulse" />
                      <span className="truncate">Wahlvorschläge</span>
                    </a>
                    <a
                      href="https://www.berlin.de/wahlen/wahlen/berliner-wahlen-2026/fragen-und-antwortkatalog/artikel.1646712.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all hover:scale-[1.02] bg-amber-50/80 dark:bg-amber-500/15 hover:bg-amber-100 dark:hover:bg-amber-500/25 border-amber-200 dark:border-amber-400/25 text-amber-900 dark:text-amber-200"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0 animate-pulse" />
                      <span className="truncate">Fragen- & Antwortkatalog (FAQs)</span>
                    </a>
                    <a
                      href="https://www.berlin.de/wahlen/wahlen/berliner-wahlen-2026/wahlgebietseinteilung/artikel.1600253.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all hover:scale-[1.02] bg-purple-50/80 dark:bg-purple-500/15 hover:bg-purple-100 dark:hover:bg-purple-500/25 border-purple-200 dark:border-purple-400/25 text-purple-900 dark:text-purple-200"
                    >
                      <span className="w-2 h-2 rounded-full bg-purple-500 shrink-0 animate-pulse" />
                      <span className="truncate">Wahlgebietseinteilung</span>
                    </a>
                    <a
                      href="https://www.berlin.de/wahlen/wahlen/berliner-wahlen-2026/briefwahl/artikel.1700053.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all hover:scale-[1.02] bg-sky-50/80 dark:bg-sky-500/15 hover:bg-sky-100 dark:hover:bg-sky-500/25 border-sky-200 dark:border-sky-400/25 text-sky-900 dark:text-sky-200"
                    >
                      <span className="w-2 h-2 rounded-full bg-sky-500 shrink-0 animate-pulse" />
                      <span className="truncate">Briefwahl</span>
                    </a>
                    <a
                      href="https://www.berlin.de/wahlen/wahlen/berliner-wahlen-2026/unionsbuerger/artikel.1600483.php"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all hover:scale-[1.02] bg-rose-50/80 dark:bg-rose-500/15 hover:bg-rose-100 dark:hover:bg-rose-500/25 border-rose-200 dark:border-rose-400/25 text-rose-900 dark:text-rose-200"
                    >
                      <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0 animate-pulse" />
                      <span className="truncate">Unionsbürgerinnen & Unionsbürger</span>
                    </a>
                    <a
                      href="https://www.bpb.de/themen/wahl-o-mat/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      title="Der Wahl-O-Mat zur Abgeordnetenhauswahl in Berlin wird am 24. August gegen Mittag unter wahl-o-mat.de veröffentlicht."
                      className="p-2.5 rounded-xl border text-xs font-semibold flex items-center gap-2 transition-all hover:scale-[1.02] bg-amber-100/90 dark:bg-amber-500/20 hover:bg-amber-200 dark:hover:bg-amber-500/30 border-amber-300 dark:border-amber-400/40 text-amber-950 dark:text-amber-100 shadow-sm"
                    >
                      <span className="w-2 h-2 rounded-full bg-amber-600 shrink-0 animate-ping" />
                      <span className="truncate font-bold">Wahl-O-Mat Berlin (Ab 24. Aug. online)</span>
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t" style={{ borderColor: T.lineSoft }}>
                <Meta read={featured.read} date={featured.date} />
                <div className="flex flex-wrap items-center gap-4">
                  <SourceLink href={featured.source.href} label={featured.source.label} />
                  <a
                    href="https://gdi.berlin.de/viewer/main/?LAYERS=[{%22id%22:%22hintergrund_default_grau%22},{%22id%22:%22wahlgebiete_agh2026:agh2026_uwb%22},{%22id%22:%22wahlgebiete_agh2026:agh2026_bwb%22},{%22id%22:%22wahlgebiete_agh2026:agh2026_awk%22}]"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>🗺️ Geoportal Berlin: Wahlgebiete 2026 (AGH)</span>
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            </a>
          )}

          {rest.map((a) => (
            <a
              key={a.title}
              href={a.source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group glass-card card-lift rounded-3xl p-7 flex flex-col justify-between gap-6 hover:border-blue-300 transition-all block text-left cursor-pointer"
            >
              <div className="flex items-center justify-between gap-4">
                <CategoryTag cat={a.cat} />
                <span className="w-8 h-8 rounded-full bg-slate-100 dark:bg-slate-700/70 group-hover:bg-blue-600 group-hover:text-white flex items-center justify-center text-slate-600 dark:text-slate-200 transition-all shrink-0">
                  <ArrowUpRight size={16} />
                </span>
              </div>
              <div>
                <h3 className="text-xl font-bold tracking-tight leading-snug mb-3 group-hover:text-blue-600 transition-colors" style={{ ...fontDisplay, color: T.text }}>
                  {a.title}
                </h3>
                <p className="text-sm leading-relaxed mb-4" style={{ color: T.muted }}>
                  {a.excerpt}
                </p>
                <div className="flex flex-col gap-2 pt-3 border-t" style={{ borderColor: T.lineSoft }}>
                  <Meta read={a.read} date={a.date} />
                  <SourceLink href={a.source.href} label={a.source.label} />
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* ── DE-Ökosystem · DeutschlandGPT ──
            Kuratierte Verlinkung zur DSGVO-konformen KI-Plattform für den
            deutschen Mittelstand — als ergänzende Ressource neben den News. */}
        <div className="mt-16 pt-12" style={{ borderTop: `1px solid ${T.lineSoft}` }}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
            <div>
              <span
                className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full uppercase tracking-wider mb-4"
                style={{ ...fontMono, color: T.blue, backgroundColor: T.blueDim, border: `1px solid ${T.blueBorder}` }}
              >
                <Sparkles size={11} />
                DE · KI-Ökosystem
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight" style={{ ...fontDisplay, color: T.text }}>
                DeutschlandGPT
              </h3>
              <p className="text-sm mt-2 max-w-md" style={{ color: T.muted }}>
                DSGVO-konforme KI-Plattform für den deutschen Mittelstand — ChatGPT, Claude & Gemini, gehostet in Deutschland.
              </p>
            </div>
            <a
              href="https://www.deutschlandgpt.de/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2"
              style={{ ...fontDisplay, backgroundColor: T.blue, color: T.blueInk }}
            >
              Zur Plattform
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {DEUTSCHLANDGPT_LINKS.map((item) => {
              const Icon = DE_ICONS[item.id];
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-3xl p-6 flex flex-col gap-8 transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2"
                  style={cardBase}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: T.blueDim, border: `1px solid ${T.blueBorder}` }}
                    >
                      <Icon size={18} style={{ color: T.blue }} />
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ color: T.blue }}
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold tracking-tight leading-snug mb-2" style={{ ...fontDisplay, color: T.text }}>
                      {item.title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: T.muted }}>
                      {item.desc}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsHub;
