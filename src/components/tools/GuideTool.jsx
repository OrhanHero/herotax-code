import { useState } from "react";
import { Route, ChevronLeft, ChevronRight } from "lucide-react";
import { T, fontDisplay } from "../../config/tokens";
import { CONFIG } from "../../config/config";
import { GUIDE_STEPS } from "../../data/guide";
import WhatsAppGlyph from "../atoms/WhatsAppGlyph";
import SourceLink from "../atoms/SourceLink";
import ToolCard from "./ToolCard";

/** TOOL 3 · Gründungs-Guide — Schrittnavigation mit Quellen */
const GuideTool = () => {
  const [step, setStep] = useState(0);
  const s = GUIDE_STEPS[step];
  const isLast = step === GUIDE_STEPS.length - 1;

  return (
    <ToolCard icon={Route} title="Gründungs-Guide Berlin" subtitle={`Schritt ${step + 1} von ${GUIDE_STEPS.length}`}>
      <div className="flex gap-1.5" role="progressbar" aria-valuenow={step + 1} aria-valuemin={1} aria-valuemax={GUIDE_STEPS.length}>
        {GUIDE_STEPS.map((_, i) => (
          <button
            key={i}
            onClick={() => setStep(i)}
            aria-label={`Zu Schritt ${i + 1}`}
            className="h-1.5 flex-1 rounded-full transition-colors duration-300 focus:outline-none focus-visible:ring-2"
            style={{ backgroundColor: i <= step ? T.blue : T.line }}
          />
        ))}
      </div>

      <div className="flex-1">
        <h4 className="text-xl font-bold mb-2.5" style={{ ...fontDisplay, color: T.text }}>
          {s.title}
        </h4>
        <p className="text-sm leading-relaxed mb-4" style={{ color: T.muted }}>
          {s.text}
        </p>
        <SourceLink href={s.source.href} label={s.source.label} />
      </div>

      <div className="flex gap-2">
        <button
          onClick={() => setStep((v) => Math.max(0, v - 1))}
          disabled={step === 0}
          className="inline-flex items-center gap-1 px-4 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200 disabled:opacity-30 focus:outline-none focus-visible:ring-2"
          style={{ ...fontDisplay, color: T.text, border: `1px solid ${T.line}`, backgroundColor: T.card }}
        >
          <ChevronLeft size={15} />
          Zurück
        </button>
        {isLast ? (
          <a
            href={CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-full text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2"
            style={{ ...fontDisplay, backgroundColor: T.blue, color: T.blueInk }}
          >
            <WhatsAppGlyph size={15} />
            Fristen-Updates im Channel
          </a>
        ) : (
          <button
            onClick={() => setStep((v) => Math.min(GUIDE_STEPS.length - 1, v + 1))}
            className="flex-1 inline-flex items-center justify-center gap-1 px-4 py-2.5 rounded-full text-sm font-bold transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2"
            style={{ ...fontDisplay, backgroundColor: T.blue, color: T.blueInk }}
          >
            Weiter
            <ChevronRight size={15} />
          </button>
        )}
      </div>
    </ToolCard>
  );
};

export default GuideTool;
