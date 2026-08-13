import { useLang } from "../../i18n";
import { T, fontMono } from "../../config/tokens";
import { FernsehturmIcon } from "./FernsehturmBadge";

/**
 * NewsTicker — durchlaufendes Nachrichten-Band im Berliner Kiosk & Amts-Blueprint Stil.
 * · Speist sich automatisch aus ARTICLES (eine Datenquelle, kein Doppelpflegen)
 * · Nahtlose Endlos-Schleife: Inhalt wird dupliziert, Animation läuft -50 %
 * · Pausiert bei Hover/Fokus (Lesbarkeit) und respektiert
 *   prefers-reduced-motion (dann horizontal scrollbar statt animiert)
 * · Jeder Eintrag verlinkt auf die Original-Quelle → neuer Tab
 */
const NewsTicker = ({ items }) => {
  const { t } = useLang();
  return (
    <div
      className="flex items-stretch shadow-xs"
      style={{ backgroundColor: T.ink, borderBottom: `1px solid ${T.line}` }}
      role="region"
      aria-label="Newsticker: aktuelle Meldungen"
      dir="ltr"
    >
      {/* Festes Label links — Berliner Kiosk / Amts-Ticker */}
      <div
        className="flex items-center gap-2 px-4 sm:px-5 py-2.5 shrink-0 z-10"
        style={{ backgroundColor: T.blue }}
      >
        <FernsehturmIcon size={16} color={T.blueInk} />
        <span className="relative flex h-2 w-2" aria-hidden="true">
          <span
            className="ticker-ping absolute inline-flex h-full w-full rounded-full opacity-75"
            style={{ backgroundColor: T.blueInk }}
          />
          <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: T.blueInk }} />
        </span>
        <span className="text-xs font-bold tracking-widest uppercase" style={{ ...fontMono, color: T.blueInk }}>
          {t("ticker.label")}
        </span>
      </div>

      {/* Laufband */}
      <div className="ticker-viewport overflow-hidden flex-1 min-w-0">
        <div className="ticker-track flex items-center whitespace-nowrap py-2.5">
          {/* Inhalt doppelt rendern → nahtlose Schleife bei -50 % */}
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center" aria-hidden={copy === 1}>
              {items.map((a) => (
                <a
                  key={`${copy}-${a.title}`}
                  href={a.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={copy === 1 ? -1 : 0}
                  className="inline-flex items-center gap-2.5 px-6 text-sm transition-opacity hover:opacity-75 focus:outline-none focus-visible:underline"
                  style={{ color: T.inkText }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-wider shrink-0 px-2 py-0.5 rounded"
                    style={{
                      ...fontMono,
                      backgroundColor: a.cat === "Berlin Fokus" ? "rgba(143,160,255,0.18)" : "rgba(255,255,255,0.1)",
                      color: a.cat === "Berlin Fokus" ? T.inkAccent : T.inkText,
                    }}
                  >
                    {a.cat}
                  </span>
                  <span className="font-semibold">{a.title}</span>
                  <span className="text-xs shrink-0" style={{ ...fontMono, color: T.inkMuted }}>
                    {a.date}
                  </span>
                  <span aria-hidden="true" style={{ color: T.inkAccent }}>+++</span>
                </a>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsTicker;
