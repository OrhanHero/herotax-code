import { useEffect } from "react";
import { T, fontDisplay, fontMono } from "../../config/tokens";
import EUDIWalletSection from "../sections/EUDIWalletSection";
import EUAIActSection from "../atoms/EUAIActSection";
import Eyebrow from "../atoms/Eyebrow";

/** EU-Kompass — bündelt die beiden EU-Digitalthemen an einer Stelle:
    EUDI-Wallet (eIDAS 2.0, digitale Identität) und den EU AI Act
    (Verordnung 2024/1689). Der AI-Act-Block saß zuvor in der Hero und
    hat die Startseite überladen. */
export default function EUDIWalletPage() {
  useEffect(() => {
    document.title = "EU-Kompass · EUDI-Wallet & EU AI Act 2026 · HERO Tax";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-4">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline underline-offset-4"
          style={{ ...fontMono, color: T.blue }}
        >
          ← Zurück zur Startseite
        </a>
      </div>

      <EUDIWalletSection />

      <section className="py-24" style={{ borderTop: `1px solid ${T.lineSoft}` }} id="eu-ai-act">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          {/* Ohne Nummer: der EU-Kompass führt bereits die 03, und die 04
              gehört dem Tools-Bereich. */}
          <Eyebrow>EU AI Act · Verordnung (EU) 2024/1689</Eyebrow>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <h2
              className="text-4xl sm:text-5xl font-black tracking-tight leading-tight max-w-2xl"
              style={{ ...fontDisplay, color: T.text }}
            >
              KI mit Regeln.
              <br />
              <span style={{ color: T.faint }}>Für ganz Europa.</span>
            </h2>
            <p className="text-sm max-w-xs" style={{ color: T.muted }}>
              Was gilt, wen es betrifft, welche Strafen drohen und welche
              Fristen laufen — kompakt aus dem Gesetzestext.
            </p>
          </div>

          <EUAIActSection />
        </div>
      </section>
    </div>
  );
}
