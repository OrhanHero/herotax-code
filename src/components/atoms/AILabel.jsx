/* EU AI Act Labeling (Digital Strategy) — Offizielles Icon & Transparenzhinweis */
import { useLang } from "../../i18n";
import { T, fontMono } from "../../config/tokens";
import aiGeneratedIcon from "../../assets/eu-ai-icons/ai-generated-black.png";

export default function AILabel() {
  const { t, isRTL } = useLang();

  return (
    <div
      className="rounded-2xl p-5 sm:p-6 border transition-colors duration-200 overflow-hidden"
      style={{
        backgroundColor: "rgba(35, 55, 232, 0.03)",
        borderColor: "rgba(35, 55, 232, 0.15)",
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-5">
        {/* Links: Logo & Titel */}
        <div className="flex items-center gap-3.5 min-w-0">
          <img
            src={aiGeneratedIcon}
            alt="EU AI Generated Content Label"
            style={{ height: "40px", width: "auto" }}
            className="shrink-0"
          />
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 mb-1">
              <span
                className="inline-block text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-md"
                style={{ ...fontMono, backgroundColor: T.blueDim, color: T.blue, border: `1px solid ${T.blueBorder}` }}
              >
                {t("ai_label.badge")}
              </span>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold bg-emerald-50 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-400/30 shrink-0" title="100% Trackingfrei · Ohne Cookies · 100% DSGVO-Konform">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                100% TRACKINGFREI · OHNE COOKIES
              </span>
            </div>
            <p className="text-xs sm:text-sm font-bold leading-tight" style={{ color: T.text }}>
              {t("ai_label.headline")}
            </p>
          </div>
        </div>

        {/* Rechts: Detail-Text */}
        <div className="text-xs leading-relaxed lg:text-right lg:max-w-md" style={{ color: T.muted }}>
          <span>{t("ai_label.detail")}</span>{" "}
          <a
            href="https://digital-strategy.ec.europa.eu/en/policies/eu-icons-labelling-ai-generated-content"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold underline hover:opacity-70 inline-inline"
            style={{ color: T.blue }}
          >
            {t("ai_label.link")} →
          </a>
        </div>
      </div>
    </div>
  );
}
