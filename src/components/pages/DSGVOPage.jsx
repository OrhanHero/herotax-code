import { useEffect } from "react";
import { T, fontMono } from "../../config/tokens";
import PrivacySection from "../sections/PrivacySection";

/* ── Interaktiver DSGVO Hub ──────────────────────────────────────────
   Visual Cards Hub für Privacy by Design, Betroffenenrechte & BfDI Radar.
   ────────────────────────────────────────────────────────────────── */

export default function DSGVOPage() {
  useEffect(() => {
    document.title = "DSGVO Hub · HERO Tax";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10 sm:py-14">
      <a
        href="/"
        className="inline-flex items-center gap-1.5 text-xs mb-8 hover:underline underline-offset-4"
        style={{ ...fontMono, color: T.faint }}
      >
        ← Zurück zur Startseite
      </a>

      {/* Interaktiver DSGVO Block mit allen Karten */}
      <PrivacySection />
    </div>
  );
}
