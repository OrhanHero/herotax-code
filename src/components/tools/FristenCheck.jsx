import { useState } from "react";
import { ListChecks, Check, RotateCcw } from "lucide-react";
import { T, fontMono } from "../../config/tokens";
import { CHECKLIST_ITEMS } from "../../data/checklist";
import ToolCard from "./ToolCard";

/** TOOL 2 · Monats-Checkliste — Checkboxen + Fortschrittsbalken */
const FristenCheck = () => {
  const [done, setDone] = useState({});
  const toggle = (id) => setDone((d) => ({ ...d, [id]: !d[id] }));
  const count = Object.values(done).filter(Boolean).length;
  const pct = Math.round((count / CHECKLIST_ITEMS.length) * 100);

  return (
    <ToolCard icon={ListChecks} title="Monats-Checkliste" subtitle="Buchhaltung · 5 Punkte">
      <div>
        <div className="flex justify-between text-xs mb-2" style={{ ...fontMono, color: T.muted }}>
          <span>{count}/{CHECKLIST_ITEMS.length} erledigt</span>
          <span style={{ color: pct === 100 ? T.blue : T.muted }}>{pct} %</span>
        </div>
        <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: T.wash }}>
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${pct}%`, backgroundColor: T.blue }}
          />
        </div>
      </div>

      <ul className="space-y-2.5">
        {CHECKLIST_ITEMS.map((item) => (
          <li key={item.id}>
            <button
              onClick={() => toggle(item.id)}
              className="w-full flex items-start gap-3 text-left rounded-xl p-3 transition-colors duration-200 focus:outline-none focus-visible:ring-2"
              style={{
                backgroundColor: done[item.id] ? T.blueDim : T.card,
                border: `1px solid ${done[item.id] ? T.blueBorder : T.line}`,
              }}
              aria-pressed={!!done[item.id]}
            >
              <span
                className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 transition-colors duration-200"
                style={{
                  backgroundColor: done[item.id] ? T.blue : "transparent",
                  border: `1px solid ${done[item.id] ? T.blue : T.faint}`,
                }}
              >
                {done[item.id] && <Check size={13} style={{ color: T.blueInk }} />}
              </span>
              <span>
                <span
                  className="block text-sm font-semibold"
                  style={{
                    color: done[item.id] ? T.faint : T.text,
                    textDecoration: done[item.id] ? "line-through" : "none",
                  }}
                >
                  {item.label}
                </span>
                <span className="block text-xs mt-0.5" style={{ color: T.faint }}>
                  {item.hint}
                </span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      {pct === 100 ? (
        <p className="text-sm font-semibold text-center" style={{ color: T.blue }}>
          Monat sauber abgeschlossen. So macht man das. 💪
        </p>
      ) : (
        <button
          onClick={() => setDone({})}
          className="inline-flex items-center gap-1.5 self-start text-xs transition-colors hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 rounded"
          style={{ ...fontMono, color: T.faint }}
        >
          <RotateCcw size={11} />
          Zurücksetzen
        </button>
      )}
    </ToolCard>
  );
};

export default FristenCheck;
