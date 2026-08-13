import { useState } from "react";
import { CheckCircle2, AlertCircle, ArrowRight, RefreshCw, FileText, Printer } from "lucide-react";
import { T, fontDisplay, fontMono } from "../../config/tokens";

/** Interaktiver 30-Sekunden E-Rechnungs-Check 2027 für Unternehmer */
export default function ERechnungCheckTool() {
  const [step, setStep] = useState(1);
  const [b2b, setB2b] = useState(null); // B2B oder B2C
  const [revenue, setRevenue] = useState(null); // < 800k oder > 800k
  const [_format, setFormat] = useState(null); // PDF/Papier oder ZUGFeRD/XRechnung

  const resetQuiz = () => {
    setStep(1);
    setB2b(null);
    setRevenue(null);
    setFormat(null);
  };

  const getResult = () => {
    if (b2b === false) {
      return {
        type: "b2c",
        status: "Keine Pflicht",
        color: "emerald",
        title: "Nur B2C-Geschäft: Keine E-Rechnungspflicht",
        desc: "Wenn du ausschließlich an Privatkunden (B2C) verkaufst, bist du von der E-Rechnungspflicht befreit. Du kannst weiterhin normale PDFs oder Papierrechnungen ausstellen.",
        action: "Empfehlung: Dennoch E-Rechnungsempfang aktivieren für Eingangsrechnungen deiner Lieferanten.",
      };
    }
    if (revenue === "over") {
      return {
        type: "pflicht_2025_2027",
        status: "Pflicht ab 01.01.2027",
        color: "rose",
        title: "E-Rechnungspflicht ab 1. Januar 2027 (über 800.000 € Umsatz)",
        desc: "Für Unternehmen mit Vorjahresumsatz über 800.000 € endet die Übergangsfrist am 31.12.2026. Ab dem 01.01.2027 musst du B2B-Rechnungen im E-Rechnungsformat (ZUGFeRD / XRechnung) versenden.",
        action: "Sofort handeln: Software auf E-Rechnungsausgabe umstellen (Empfangspflicht gilt bereits seit 01.01.2025!).",
      };
    }
    return {
      type: "pflicht_2028",
      status: "Pflicht ab 01.01.2028",
      color: "amber",
      title: "Empfangspflicht AKTIV — Versandpflicht ab 1. Januar 2028 (unter 800.000 € Umsatz)",
      desc: "Für kleinere Unternehmen und Gründer unter 800.000 € Umsatz gilt die Übergangsfrist bis Ende 2027. WICHTIG: Die Pflicht zum EMPFANG von E-Rechnungen gilt bereits seit 1. Januar 2025!",
      action: "Nächster Schritt: Stelle sicher, dass du strukturierte E-Rechnungen (ZUGFeRD/XRechnung) verarbeiten und GoBD-konform archivieren kannst.",
    };
  };

  const result = step === 4 ? getResult() : null;

  return (
      <div className="rounded-3xl p-7 sm:p-9 border shadow-md relative overflow-hidden transition-colors" style={{ backgroundColor: T.card, borderColor: T.line }}>
      <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b" style={{ borderColor: T.lineSoft }}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0">
            <FileText size={20} />
          </div>
          <div>
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block">
              Interaktives Tool · 30-Sekunden Check
            </span>
            <h3 className="text-xl font-bold tracking-tight" style={{ ...fontDisplay, color: T.text }}>
              E-Rechnungs-Check 2027
            </h3>
          </div>
        </div>
        <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-full" style={{ backgroundColor: T.wash, color: T.muted }}>
          Schritt {Math.min(step, 3)} von 3
        </span>
      </div>

      {step === 1 && (
        <div className="space-y-5">
          <h4 className="text-base font-bold" style={{ color: T.text }}>Frage 1: An wen verkaufst du deine Waren oder Dienstleistungen?</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setB2b(true);
                setStep(2);
              }}
              className="p-5 rounded-2xl border text-left transition-all hover:border-blue-500 hover:bg-blue-500/5 group"
              style={{ backgroundColor: T.wash, borderColor: T.line }}
            >
              <span className="font-bold group-hover:text-blue-600 block text-base mb-1" style={{ color: T.text }}>
                Geschäftskunden (B2B)
              </span>
              <span className="text-xs leading-relaxed block" style={{ color: T.muted }}>
                Ich stelle Rechnungen an Firmen, Selbstständige oder Freiberufler aus.
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                setB2b(false);
                setStep(4);
              }}
              className="p-5 rounded-2xl border text-left transition-all hover:border-blue-500 hover:bg-blue-500/5 group"
              style={{ backgroundColor: T.wash, borderColor: T.line }}
            >
              <span className="font-bold group-hover:text-blue-600 block text-base mb-1" style={{ color: T.text }}>
                Ausschließlich Privatkunden (B2C)
              </span>
              <span className="text-xs leading-relaxed block" style={{ color: T.muted }}>
                Ich liefere nur an Endverbraucher / Privatpersonen.
              </span>
            </button>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-5">
          <h4 className="text-base font-bold" style={{ color: T.text }}>Frage 2: Wie hoch ist dein Vorjahresumsatz (2025 / 2026)?</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setRevenue("under");
                setStep(3);
              }}
              className="p-5 rounded-2xl border text-left transition-all hover:border-blue-500 hover:bg-blue-500/5 group"
              style={{ backgroundColor: T.wash, borderColor: T.line }}
            >
              <span className="font-bold group-hover:text-blue-600 block text-base mb-1" style={{ color: T.text }}>
                Unter 800.000 € Umsatz
              </span>
              <span className="text-xs leading-relaxed block" style={{ color: T.muted }}>
                Kleinunternehmen, Gründer oder Mittelstand unter der 800k-Grenze.
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                setRevenue("over");
                setStep(3);
              }}
              className="p-5 rounded-2xl border text-left transition-all hover:border-blue-500 hover:bg-blue-500/5 group"
              style={{ backgroundColor: T.wash, borderColor: T.line }}
            >
              <span className="font-bold group-hover:text-blue-600 block text-base mb-1" style={{ color: T.text }}>
                Über 800.000 € Umsatz
              </span>
              <span className="text-xs leading-relaxed block" style={{ color: T.muted }}>
                Größeres Unternehmen mit Jahresumsatz über 800.000 €.
              </span>
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-5">
          <h4 className="text-base font-bold" style={{ color: T.text }}>Frage 3: In welchem Format schreibst du bisher deine Rechnungen?</h4>
          <div className="grid sm:grid-cols-2 gap-3">
            <button
              type="button"
              onClick={() => {
                setFormat("pdf");
                setStep(4);
              }}
              className="p-5 rounded-2xl border text-left transition-all hover:border-blue-500 hover:bg-blue-500/5 group"
              style={{ backgroundColor: T.wash, borderColor: T.line }}
            >
              <span className="font-bold group-hover:text-blue-600 block text-base mb-1" style={{ color: T.text }}>
                Manuelles PDF oder Papier
              </span>
              <span className="text-xs leading-relaxed block" style={{ color: T.muted }}>
                Word, Excel, normales PDF ohne eingebetteten XML-Code.
              </span>
            </button>
            <button
              type="button"
              onClick={() => {
                setFormat("e-rechnung");
                setStep(4);
              }}
              className="p-5 rounded-2xl border text-left transition-all hover:border-blue-500 hover:bg-blue-500/5 group"
              style={{ backgroundColor: T.wash, borderColor: T.line }}
            >
              <span className="font-bold group-hover:text-blue-600 block text-base mb-1" style={{ color: T.text }}>
                ZUGFeRD oder XRechnung
              </span>
              <span className="text-xs leading-relaxed block" style={{ color: T.muted }}>
                Strukturiertes Datenformat mit XML (EN 16931 Standard).
              </span>
            </button>
          </div>
        </div>
      )}

      {step === 4 && result && (
        <div className="space-y-6 animate-fadeIn">
          <div className={`p-6 rounded-2xl border ${result.color === "emerald" ? "bg-emerald-50/80 border-emerald-200 text-emerald-950" : result.color === "rose" ? "bg-rose-50/80 border-rose-200 text-rose-950" : "bg-amber-50/80 border-amber-200 text-amber-950"}`}>
            <div className="flex items-center justify-between gap-3 mb-3">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider ${result.color === "emerald" ? "bg-emerald-200 text-emerald-900" : result.color === "rose" ? "bg-rose-200 text-rose-900" : "bg-amber-200 text-amber-900"}`}>
                {result.color === "emerald" ? <CheckCircle2 size={14} /> : <AlertCircle size={14} />}
                {result.status}
              </span>
            </div>
            <h4 className="text-xl font-bold tracking-tight mb-2" style={{ ...fontDisplay }}>
              {result.title}
            </h4>
            <p className="text-sm leading-relaxed mb-4 opacity-90">
              {result.desc}
            </p>
            <div className="p-3.5 rounded-xl bg-white/80 dark:bg-slate-900/70 border border-slate-200/80 dark:border-slate-700/70 text-xs font-semibold text-slate-800 dark:text-slate-100 flex items-start gap-2">
              <ArrowRight size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
              <span>{result.action}</span>
            </div>
          </div>

          {/* Amtliche Primärquellen & Leitfäden */}
          <div className="pt-4 border-t" style={{ borderColor: T.lineSoft }}>
            <p className="text-xs font-bold uppercase tracking-wider mb-2.5" style={{ ...fontMono, color: T.faint }}>
              Amtliche Primärquellen & IHK-Leitfäden:
            </p>
            <div className="flex flex-col gap-2">
              <a
                href="https://www.bundesfinanzministerium.de/Content/DE/FAQ/e-rechnung.html"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1.5"
                style={{ ...fontMono }}
              >
                <span>🏛️ BMF — E-Rechnung FAQs & Übergangsregeln</span>
                <ArrowRight size={12} />
              </a>
              <a
                href="https://e-rechnung-bund.de/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1.5"
                style={{ ...fontMono }}
              >
                <span>🇩🇪 E-Rechnung Bund — Plattform & Standards (XRechnung / ZUGFeRD)</span>
                <ArrowRight size={12} />
              </a>
              <a
                href="https://www.ihk.de/darmstadt/produktmarken/recht-und-fair-play/steuerinfo/bmf-plant-verpflichtende-erechnung-und-meldesystem-5784882"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center gap-1.5"
                style={{ ...fontMono }}
              >
                <span>🏢 IHK — Verpflichtende E-Rechnung & Meldesystem im Überblick</span>
                <ArrowRight size={12} />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap justify-between items-center gap-3 pt-2">
            <button
              type="button"
              onClick={resetQuiz}
              className="inline-flex items-center gap-2 text-xs font-bold text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
              style={{ ...fontMono }}
            >
              <RefreshCw size={14} />
              <span>Check neu starten</span>
            </button>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 text-xs font-bold transition-all shadow-xs"
              style={{ ...fontMono }}
            >
              <Printer size={14} className="text-blue-600 dark:text-blue-400" />
              <span>Roadmap drucken / als PDF speichern</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
