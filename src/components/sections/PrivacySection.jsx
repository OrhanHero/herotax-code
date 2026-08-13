import { ShieldCheck, Scale } from "lucide-react";
import { useLang } from "../../i18n";
import { T, fontDisplay, fontMono, cardBase } from "../../config/tokens";
import { PRIVACY_PRINCIPLES, BFDI_ITEMS, BFDI_BUERGER_THEMES } from "../../data/privacy";
import Eyebrow from "../atoms/Eyebrow";
import SourceLink from "../atoms/SourceLink";

/** Säule 06 · Datenschutz & Compliance
    Linke Karte: DSGVO-Selbstverpflichtung der Plattform.
    Rechte Spalte: "Datenschutz-Radar" mit BfDI-Themen inkl. Quellen-Links.
    HINWEIS für den Betreiber: Dieser Block ersetzt KEINE vollständige
    Datenschutzerklärung nach Art. 13/14 DSGVO — die gehört auf eine
    eigene Unterseite (Footer-Link "Datenschutz"). */
const PrivacySection = () => {
  const { t } = useLang();
  return (
    <section className="py-24" style={{ borderTop: `1px solid ${T.lineSoft}` }} id="datenschutz">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Eyebrow index="07">{t("privacy.eyebrow")}</Eyebrow>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight max-w-2xl" style={{ ...fontDisplay, color: T.text }}>
            {t("privacy.t1")}
            <br />
            <span style={{ color: T.faint }}>{t("privacy.t2")}</span>
          </h2>
          <p className="text-sm max-w-xs" style={{ color: T.muted }}>
            {t("privacy.sub")}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-5 items-stretch">
          {/* DSGVO-Selbstverpflichtung der Plattform */}
          <div
            className="lg:col-span-3 rounded-3xl p-8 sm:p-10"
            style={{ backgroundColor: T.ink }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span
                className="w-11 h-11 rounded-2xl flex items-center justify-center"
                style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)" }}
              >
                <ShieldCheck size={22} style={{ color: T.inkAccent }} />
              </span>
              <div>
                <h3 className="text-xl font-bold" style={{ ...fontDisplay, color: T.inkText }}>
                  DSGVO bei HERO Tax
                </h3>
                <p className="text-xs" style={{ ...fontMono, color: T.inkMuted }}>
                  Privacy by Design · Stand: August 2026
                </p>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-x-8 gap-y-7">
              {PRIVACY_PRINCIPLES.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-3.5">
                  <Icon size={19} className="shrink-0 mt-0.5" style={{ color: T.inkAccent }} />
                  <div>
                    <h4 className="font-bold text-sm mb-1.5" style={{ ...fontDisplay, color: T.inkText }}>
                      {title}
                    </h4>
                    <p className="text-sm leading-relaxed" style={{ color: T.inkMuted }}>
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-9 pt-6" style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}>
              <p className="text-xs mb-4" style={{ ...fontMono, color: T.inkMuted }}>
                BfDI für Bürger:innen — weitere Themen
              </p>
              <div className="grid sm:grid-cols-2 gap-3">
                {BFDI_BUERGER_THEMES.map(({ icon: Icon, title, text, href }) => (
                  <a
                    key={title}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group rounded-2xl p-4 flex flex-col transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.15)" }}
                  >
                    <span
                      className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                      style={{ backgroundColor: "rgba(255,255,255,0.08)" }}
                    >
                      <Icon size={17} style={{ color: T.inkAccent }} />
                    </span>
                    <h4 className="font-bold text-sm mb-1" style={{ ...fontDisplay, color: T.inkText }}>
                      {title}
                    </h4>
                    <p className="text-xs leading-relaxed" style={{ color: T.inkMuted }}>
                      {text}
                    </p>
                  </a>
                ))}
              </div>
            </div>

            <div
              className="mt-9 pt-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              style={{ borderTop: "1px solid rgba(255,255,255,0.12)" }}
            >
              <p className="text-xs" style={{ ...fontMono, color: T.inkMuted }}>
                100% Privacy by Design · Keine Tracking-Cookies · EU-Server Caching
              </p>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                DSGVO-Konform
              </span>
            </div>
          </div>

          {/* Datenschutz-Radar: BfDI-Themen mit Quellen */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div
              className="rounded-2xl px-6 py-4 flex items-center gap-3"
              style={{ backgroundColor: T.blueDim, border: `1px solid ${T.blueBorder}` }}
            >
              <Scale size={18} style={{ color: T.blue }} />
              <p className="text-sm font-semibold" style={{ color: T.text }}>
                Datenschutz-Radar{" "}
                <span className="font-normal" style={{ color: T.muted }}>
                  — Themen der Bundesbeauftragten für den Datenschutz (BfDI)
                </span>
              </p>
            </div>

            {BFDI_ITEMS.map((item) => (
              <article
                key={item.title}
                className="group rounded-3xl p-6 flex-1 flex flex-col transition-all duration-300 hover:-translate-y-1"
                style={cardBase}
              >
                <h4 className="font-bold leading-snug mb-2" style={{ ...fontDisplay, color: T.text }}>
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: T.muted }}>
                  {item.text}
                </p>
                <SourceLink href={item.source.href} label={item.source.label} />
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
