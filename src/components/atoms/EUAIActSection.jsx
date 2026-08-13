import { useState } from "react";
import { ShieldAlert, Users, CalendarClock, Scale, CheckCircle2, AlertTriangle, ExternalLink, Info, Gavel, BookOpen, Newspaper, HelpCircle } from "lucide-react";
import { T, fontDisplay, fontMono } from "../../config/tokens";

/* Badge-Schrift auf die Füllfarbe abstimmen: pauschales Weiß lag auf den
   hellen Signalfarben (Amber, Emerald) bei ~2:1 und war kaum lesbar. */
const inkOn = (hex) => {
  const ch = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  const f = (v) => (v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4));
  const lum = 0.2126 * f(ch[0]) + 0.7152 * f(ch[1]) + 0.0722 * f(ch[2]);
  return lum > 0.2 ? "#121215" : "#FFFFFF";
};

export default function EUAIActSection() {
  const [tab, setTab] = useState("rules"); // 'rules' | 'target' | 'penalties' | 'timeline'

  const pillLinks = [
    {
      title: "EU KI-Rahmenwerk",
      href: "https://digital-strategy.ec.europa.eu/de/policies/regulatory-framework-ai#1720699867912-2",
      icon: Scale,
    },
    {
      title: "Aktuelle EU-KI-News",
      href: "https://digital-strategy.ec.europa.eu/de/news",
      icon: Newspaper,
    },
    {
      title: "EU AI Act FAQs",
      href: "https://digital-strategy.ec.europa.eu/de/faqs/navigating-ai-act",
      icon: HelpCircle,
    },
  ];

  const rules = [
    {
      title: "Transparenzpflichten (Art. 50 EU AI Act)",
      desc: "KI-generierte Texte, Bilder, Videos und Chatbots müssen eindeutig als KI-Erzeugnisse gekennzeichnet werden — bei Deepfakes und synthetischen Medien zusätzlich maschinenlesbar.",
      impact: "Anwendbar seit 02.08.2026",
      icon: Info,
    },
    {
      title: "KI-Kompetenz im Betrieb (Art. 4 EU AI Act)",
      desc: "Arbeitgeber müssen sicherstellen, dass Mitarbeiter, die KI-Tools nutzen, ausreichend im sicheren Umgang geschult sind.",
      impact: "Anwendbar seit 02.02.2025",
      icon: CheckCircle2,
    },
    {
      title: "Verbot unzulässiger KI-Systeme (Art. 5)",
      desc: "Social Scoring, Verhaltensmanipulation und biometrische Massenüberwachung sind in der EU streng verboten.",
      impact: "Bußgelder bis zu 35 Mio. € oder 7 % vom Umsatz",
      icon: AlertTriangle,
    },
  ];

  const targets = [
    {
      role: "Unternehmer & Arbeitgeber",
      desc: "Wer KI im Recruiting, Buchhaltung, Kundenservice oder Marketing einsetzt, trägt Verantwortung für Compliance & Datenschutz.",
      badge: "Anwender / Deployer",
    },
    {
      role: "Entwickler & FinTechs",
      desc: "Wer KI-Modelle entwickelt oder per API in eigene Produkte integriert, muss Risikobewertungen & Dokumentation vorweisen.",
      badge: "Anbieter / Provider",
    },
    {
      role: "Privatpersonen & Verbraucher",
      desc: "Recht auf Aufklärung bei KI-Interaktion, Schutz vor Deepfakes sowie Anspruch auf Beschwerde bei Aufsichtsbehörden.",
      badge: "Verbraucherschutz",
    },
  ];

  const penalties = [
    {
      level: "Höchststrafe: Bis zu 35 Mio. € oder 7 % Umsatz",
      desc: "Gilt für Verstöße gegen verbotene KI-Praktiken (Art. 5) wie Social Scoring, verdeckte Manipulation oder biometrische Massenüberwachung.",
      tag: "Stufe 1 · Verbotene KI",
      color: "#EF4444",
    },
    {
      level: "Bis zu 15 Mio. € oder 3 % Umsatz",
      desc: "Gilt bei Nichteinhaltung von Hochrisiko-KI-Auflagen, fehlender Transparenzkennzeichnung (Art. 50) oder Pflichtverstößen von Anwendern.",
      tag: "Stufe 2 · Hochrisiko & Transparenz",
      color: "#F59E0B",
    },
    {
      level: "Bis zu 7,5 Mio. € oder 1,5 % Umsatz",
      desc: "Gilt für die Übermittlung falscher, unvollständiger oder irreführender Informationen an behördliche Marktüberwacher.",
      tag: "Stufe 3 · Falschangaben",
      color: "#3B82F6",
    },
    {
      level: "Sonderregelung für KMUs & Start-ups",
      desc: "Für kleine und mittlere Unternehmen (KMUs) sowie Start-ups gilt grundsätzlich der jeweils niedrigere Betrag als Bußgeldgrenze.",
      tag: "KMU & Start-up Schutz",
      color: "#10B981",
    },
  ];

  /* Stand: 13.08.2026. Der „Digital Omnibus on AI" — Verordnung (EU)
     2026/1744, in Kraft seit 27.07.2026 — hat die Hochrisiko-Pflichten
     nach hinten geschoben: Anhang III von 08/2026 auf 02.12.2027,
     eingebettete Produkte auf 02.08.2028. Vor dem nächsten Update
     gegen EUR-Lex prüfen, die Fristen sind in Bewegung. */
  const timeline = [
    {
      date: "02.02.2025",
      title: "Verbot unzulässiger KI & KI-Schulungspflicht",
      desc: "Geltungsbeginn für KI-Verbote (Art. 5) und Verpflichtung zur KI-Alphabetisierung von Mitarbeitern (Art. 4).",
      status: "In Kraft",
      color: "#10B981",
    },
    {
      date: "02.08.2025",
      title: "GPAI & Governance-Regeln",
      desc: "Pflichten für General Purpose AI (Basis-Modelle) und Start der Aufsichtsstrukturen auf EU- und Bundesebene.",
      status: "In Kraft",
      color: "#10B981",
    },
    {
      date: "02.08.2026",
      title: "Transparenzpflichten & Durchsetzung",
      desc: "Art. 50 gilt: Kennzeichnung von KI-Inhalten, Chatbots und Deepfakes. AI Office und nationale Behörden — in Deutschland die Bundesnetzagentur — beginnen mit der Durchsetzung.",
      status: "In Kraft",
      color: "#10B981",
    },
    {
      date: "02.12.2027",
      title: "Hochrisiko-KI nach Anhang III",
      desc: "Konformitätsbewertung, Risikomanagement und Dokumentation für eigenständige Hochrisiko-Systeme — durch den Digital Omnibus (VO (EU) 2026/1744) von August 2026 verschoben.",
      status: "Verschoben · Omnibus",
      color: "#F59E0B",
    },
    {
      date: "02.08.2028",
      title: "KI in regulierten Produkten",
      desc: "Erweiterte Bestimmungen für KI-Systeme als Sicherheitsbauteile in bereits regulierten EU-Produkten (Anhang I).",
      status: "Stufe 5",
      color: "#6B7280",
    },
  ];

  return (
    <div
      className="mt-6 rounded-3xl p-4 sm:p-7 border shadow-sm max-w-full overflow-hidden"
      style={{ backgroundColor: T.card, borderColor: T.line }}
    >
      {/* Header Badge & Title + EUR-Lex Link on top right */}
      <div className="pb-3.5 border-b mb-5 max-w-full" style={{ borderColor: T.lineSoft }}>
        <div className="flex flex-wrap sm:flex-nowrap items-start justify-between gap-3 mb-3 max-w-full">
          <div className="flex items-start gap-2.5 min-w-0 max-w-full">
            <span className="w-8 h-8 rounded-xl bg-blue-50 dark:bg-blue-500/15 border border-blue-200 dark:border-blue-400/30 flex items-center justify-center shrink-0 mt-0.5">
              <Scale size={16} className="text-blue-600 dark:text-blue-400" />
            </span>
            <div className="min-w-0 flex-1">
              <h3 className="font-bold text-sm sm:text-base leading-snug break-words" style={{ ...fontDisplay, color: T.text }}>
                EU AI Act Guide 🇪🇺 · Verordnung (EU) 2024/1689
              </h3>
              <p className="text-xs mt-0.5 break-words" style={{ ...fontMono, color: T.faint }}>
                Kompakt-Kompass: Regeln, wer betroffen ist, Strafen & Fristen
              </p>
            </div>
          </div>
          <a
            href="https://eur-lex.europa.eu/legal-content/DE/TXT/?uri=CELEX:32024R1689"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-blue-50 dark:bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-400/30 hover:bg-blue-100 dark:hover:bg-blue-500/25 transition-colors shrink-0 max-w-full truncate"
            style={{ ...fontMono }}
          >
            <BookOpen size={13} className="text-blue-600 dark:text-blue-400 shrink-0" />
            <span>EUR-Lex Gesetzestext</span>
            <ExternalLink size={11} className="opacity-70 shrink-0" />
          </a>
        </div>

        {/* 3 Pill Badges in 3 equal columns covering 100% full width (No empty space!) */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 pt-1">
          {pillLinks.map((link) => {
            const Icon = link.icon;
            return (
              <a
                key={link.title}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-2 py-1.5 rounded-md text-[11px] font-bold bg-slate-50 dark:bg-slate-800/70 text-slate-700 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-500/20 hover:text-blue-600 dark:hover:text-blue-300 border border-slate-200/80 dark:border-slate-700 transition-colors text-center w-full"
                style={{ ...fontMono }}
              >
                <Icon size={11} className="text-blue-600 dark:text-blue-400 shrink-0" />
                <span className="truncate">{link.title}</span>
                <ExternalLink size={10} className="opacity-60 shrink-0" />
              </a>
            );
          })}
        </div>
      </div>

      {/* Control Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-xl bg-slate-100/80 dark:bg-slate-800/60 mb-5 border border-slate-200/60 dark:border-slate-700/60">
        <button
          type="button"
          onClick={() => setTab("rules")}
          className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            tab === "rules" ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          }`}
          style={{ ...fontDisplay }}
        >
          <ShieldAlert size={13} /> Was gilt?
        </button>
        <button
          type="button"
          onClick={() => setTab("target")}
          className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            tab === "target" ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          }`}
          style={{ ...fontDisplay }}
        >
          <Users size={13} /> Betroffene
        </button>
        <button
          type="button"
          onClick={() => setTab("penalties")}
          className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            tab === "penalties" ? "bg-white dark:bg-slate-700 text-red-600 dark:text-red-300 shadow-xs" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          }`}
          style={{ ...fontDisplay }}
        >
          <Gavel size={13} /> Strafen
        </button>
        <button
          type="button"
          onClick={() => setTab("timeline")}
          className={`py-2 px-2 rounded-lg text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
            tab === "timeline" ? "bg-white dark:bg-slate-700 text-blue-600 dark:text-blue-300 shadow-xs" : "text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white"
          }`}
          style={{ ...fontDisplay }}
        >
          <CalendarClock size={13} /> Fristen
        </button>
      </div>

      {/* Tab 1: Was zu beachten ist */}
      {tab === "rules" && (
        <div className="space-y-3">
          {rules.map((r) => {
            const Icon = r.icon;
            return (
              <div key={r.title} className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60">
                <div className="flex items-start gap-2.5">
                  <Icon size={16} className="text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100" style={{ ...fontDisplay }}>
                      {r.title}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 mt-1 leading-relaxed">{r.desc}</p>
                    <span className="inline-block mt-2 text-[10px] font-mono font-bold uppercase text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                      {r.impact}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}

      {/* Tab 2: Wer davon betroffen ist */}
      {tab === "target" && (
        <div className="space-y-3">
          {targets.map((t) => (
            <div key={t.role} className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h4 className="font-bold text-xs sm:text-sm text-slate-900 dark:text-slate-100" style={{ ...fontDisplay }}>
                  {t.role}
                </h4>
                <span className="text-[10px] font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200/60">
                  {t.badge}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 3: Strafen & Bußgeldrahmen (Art. 99) */}
      {tab === "penalties" && (
        <div className="space-y-3">
          {penalties.map((p) => (
            <div key={p.level} className="p-3.5 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60">
              <div className="flex items-center justify-between gap-2 mb-1.5">
                <h4 className="font-bold text-xs sm:text-sm text-red-700 flex items-center gap-1.5" style={{ ...fontDisplay }}>
                  <Gavel size={14} className="shrink-0" />
                  {p.level}
                </h4>
                <span
                  className="text-[10px] font-mono font-bold px-2 py-0.5 rounded shrink-0"
                  style={{ backgroundColor: p.color, color: inkOn(p.color) }}
                >
                  {p.tag}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      )}

      {/* Tab 4: Fristen & Stufenplan */}
      {tab === "timeline" && (
        <div className="space-y-2.5">
          {timeline.map((t) => (
            <div key={t.date} className="p-3 rounded-2xl bg-slate-50/80 dark:bg-slate-800/50 border border-slate-200/70 dark:border-slate-700/60 flex items-start gap-3">
              <span
                className="px-2 py-1 rounded text-[10px] font-mono font-bold shrink-0 mt-0.5"
                style={{ backgroundColor: t.color, color: inkOn(t.color) }}
              >
                {t.date}
              </span>
              <div>
                <h4 className="font-bold text-xs text-slate-900 dark:text-slate-100" style={{ ...fontDisplay }}>
                  {t.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 mt-0.5 leading-relaxed">{t.desc}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
