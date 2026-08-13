import { useState, useEffect } from "react";
import { Cpu, ArrowUpRight, ShieldCheck, ExternalLink } from "lucide-react";
import { useLang } from "../../i18n";
import { T, fontDisplay, fontMono, cardBase } from "../../config/tokens";
import { AI_ARTICLES, BMDS_ITEMS, BSI_ITEMS } from "../../data/articles";
import { getArticles } from "../../services/articleService";
import Eyebrow from "../atoms/Eyebrow";
import Meta from "../atoms/Meta";
import SourceLink from "../atoms/SourceLink";
import LiveTrackerBadge from "../atoms/LiveTrackerBadge";
import BrandenburgerTorBadge from "../atoms/BrandenburgerTorBadge";
import AIImageOverlay from "../atoms/AIImageOverlay";

/** Säule 01 · KI im Steuerrecht & Prozess-Intelligence */
const AISection = () => {
  const { t } = useLang();
  const [bmdsItems, setBmdsItems] = useState(BMDS_ITEMS);
  const [bsiItems, setBsiItems] = useState(BSI_ITEMS);

  // Lade BMDS- & BSI-Meldungen live (mit Caching & Fallback auf kuratierte Daten)
  useEffect(() => {
    getArticles("bmds").then(setBmdsItems);
    getArticles("bsi").then(setBsiItems);
  }, []);

  const refreshAiFeeds = async () => {
    const bmds = await getArticles("bmds");
    const bsi = await getArticles("bsi");
    setBmdsItems(bmds);
    setBsiItems(bsi);
  };

  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-24 rounded-3xl bg-blueprint-grid my-8" id="ki">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
        <div className="flex items-center gap-3">
          <Eyebrow index="01">{t("ai.eyebrow")}</Eyebrow>
          <BrandenburgerTorBadge label="KI-SCHUTZSCHILD BERLIN" />
        </div>
        <LiveTrackerBadge type="bmds" onRefresh={refreshAiFeeds} />
      </div>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight max-w-2xl" style={{ ...fontDisplay, color: T.text }}>
          {t("ai.t1")}
          <br />
          <span style={{ color: T.faint }}>{t("ai.t2")}</span>
        </h2>
        <p className="text-sm max-w-xs" style={{ color: T.muted }}>
          {t("ai.sub")}
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {AI_ARTICLES.map((a) => (
          <article
            key={a.title}
            className="group rounded-3xl p-7 flex flex-col gap-6 transition-all duration-300 hover:-translate-y-1"
            style={cardBase}
          >
            <div className="flex items-center justify-between">
              <span
                className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full uppercase tracking-wider"
                style={{ ...fontMono, color: T.blue, backgroundColor: T.blueDim, border: `1px solid ${T.blueBorder}` }}
              >
                <Cpu size={11} />
                {a.tag}
              </span>
              <ArrowUpRight size={18} className="opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ color: T.blue }} />
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-bold tracking-tight leading-snug mb-3" style={{ ...fontDisplay, color: T.text }}>
                {a.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: T.muted }}>
                {a.excerpt}
              </p>
            </div>
            <div className="flex flex-col gap-2.5 pt-4" style={{ borderTop: `1px solid ${T.lineSoft}` }}>
              <Meta read={a.read} date={a.date} />
              <SourceLink href={a.source.href} label={a.source.label} />
            </div>
          </article>
        ))}
      </div>

      {/* ── KI-Sicherheit & Regulierung · Bund (BMDS) ──
          Hervorgehobenes Panel mit offiziellen Meldungen des
          Bundesministeriums für Digitales und Staatsmodernisierung. */}
      <div
        className="mt-5 rounded-3xl p-8 sm:p-10"
        style={{
          background: `linear-gradient(135deg, ${T.blue} 0%, #1725A8 100%)`,
        }}
      >
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-8">
          <div className="lg:col-span-7 flex items-center gap-3">
            <span
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <ShieldCheck size={24} style={{ color: "#FFFFFF" }} />
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight" style={{ ...fontDisplay, color: "#FFFFFF" }}>
                KI-Sicherheit & Regulierung · Bund 🌙
              </h3>
              <p className="text-xs" style={{ ...fontMono, color: "rgba(255,255,255,0.65)" }}>
                Offizielle Quellen: BMDS (Digitalpolitik & Regulierung) · BSI (Cyber- & KI-Sicherheit)
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-end gap-3">
            <AIImageOverlay
              src="/images/berlin_moonlight_brandenburg.png"
              alt="Berlin Brandenburger Tor Moonlight Tech Visual"
              className="hidden sm:block rounded-xl border border-white/20 shadow-md"
              imgClassName="w-48 h-20 object-cover rounded-xl"
            />
            <a
              href="https://bmds.bund.de/aktuelles"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 shrink-0"
              style={{ ...fontDisplay, backgroundColor: "#FFFFFF", color: "#2337E8" }}
            >
              Alle BMDS-Meldungen
              <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Zeile 1 · BMDS — Bundesministerium für Digitales und Staatsmodernisierung */}
        <p className="text-xs uppercase tracking-widest mb-4" style={{ ...fontMono, color: "rgba(255,255,255,0.55)" }}>
          BMDS · Bundesministerium für Digitales und Staatsmodernisierung
        </p>

        <div className="grid sm:grid-cols-2 gap-4">
          {bmdsItems.map((item) => (
            <a
              key={item.title}
              href={item.source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-6 flex flex-col transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-xs uppercase tracking-wider" style={{ ...fontMono, color: "rgba(255,255,255,0.6)" }}>
                  {item.date}
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 opacity-50 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "#FFFFFF" }}
                />
              </div>
              <h4 className="font-bold leading-snug mb-2" style={{ ...fontDisplay, color: "#FFFFFF" }}>
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                {item.text}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-xs"
                style={{ ...fontMono, color: "rgba(255,255,255,0.85)" }}
              >
                <ExternalLink size={11} />
                Quelle: {item.source.label}
              </span>
            </a>
          ))}
        </div>

        {/* Zeile 2 · BSI — Bundesamt für Sicherheit in der Informationstechnik */}
        <div
          className="mt-8 pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.18)" }}
        >
          <p className="text-xs uppercase tracking-widest" style={{ ...fontMono, color: "rgba(255,255,255,0.55)" }}>
            BSI · Bundesamt für Sicherheit in der Informationstechnik
          </p>
          <a
            href="https://www.bsi.bund.de/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 self-start px-5 py-2.5 rounded-full text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2"
            style={{ ...fontDisplay, backgroundColor: "rgba(255,255,255,0.14)", color: "#FFFFFF", border: "1px solid rgba(255,255,255,0.3)" }}
          >
            Alle BSI-Meldungen
            <ExternalLink size={14} />
          </a>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {bsiItems.map((item) => (
            <a
              key={item.title}
              href={item.source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-6 flex flex-col transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span className="text-xs uppercase tracking-wider" style={{ ...fontMono, color: "rgba(255,255,255,0.6)" }}>
                  {item.date}
                </span>
                <ArrowUpRight
                  size={16}
                  className="shrink-0 opacity-50 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "#FFFFFF" }}
                />
              </div>
              <h4 className="font-bold leading-snug mb-2" style={{ ...fontDisplay, color: "#FFFFFF" }}>
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                {item.text}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-xs"
                style={{ ...fontMono, color: "rgba(255,255,255,0.85)" }}
              >
                <ExternalLink size={11} />
                Quelle: {item.source.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AISection;
