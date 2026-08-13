import { useState } from "react";
import { Rocket, Building2, BarChart3, ChevronRight, ExternalLink } from "lucide-react";
import { useLang } from "../../i18n";
import { T, fontDisplay, fontMono } from "../../config/tokens";
import SiteStatusBadge from "../atoms/SiteStatusBadge";
import FernsehturmBadge from "../atoms/FernsehturmBadge";
import AIImageOverlay from "../atoms/AIImageOverlay";

/** Hero Section: HERO Tax — Berlin Startup & Ecosystem Radar 2026 (Mit verifizierten Original-Quellen) */
const HeroSection = () => {
  const { t } = useLang();
  const [activeTab, setActiveTab] = useState("trends"); // 'trends' | 'hubs' | 'kpis'

  const trends = [
    {
      title: "Agentic AI & FinTech Boom",
      desc: "KI-Beleganalyse und Tax Automation sind 2026 die Wachstumsfelder der Berliner Tech-Szene — begleitet vom KI Bundesverband mit Sitz in Berlin.",
      tag: "Tech #1 in DE",
      source: "KI Bundesverband e.V.",
      href: "https://ki-verband.de/",
    },
    {
      title: "22.306 Gewerbeanmeldungen in H1 2026",
      desc: "Berlins Gründungsgeschehen bleibt auf Vorjahresniveau — amtlich gemeldet für das 1. Halbjahr 2026.",
      tag: "−0,5 % ggü. Vorjahr",
      source: "Amt für Statistik Berlin-Brandenburg",
      href: "https://www.statistik-berlin-brandenburg.de/gewerbeanzeigen/",
    },
    {
      title: "CleanTech & Smart Energy",
      desc: "Starker Fokus auf nachhaltige Energiewende & Mobility am EUREF-Campus & Adlershof.",
      tag: "Green Tech",
      source: "EUREF-Campus Berlin",
      href: "https://euref.de/",
    },
  ];

  const hubs = [
    {
      title: "Merantix AI Hub Mitte",
      desc: "Europas führendes Ökosystem für KI-Startups, Risikokapital & KI-Governance in Berlin-Mitte.",
      tag: "AI Capital",
      source: "Merantix AI Hub",
      href: "https://www.merantix.com/",
    },
    {
      title: "Factory Berlin Ecosystem",
      desc: "Kreative Tech-Community, Smart City Initiativen und internationale Gründer-Netzwerke.",
      tag: "Innovations-Hub",
      source: "Factory Berlin",
      href: "https://factoryberlin.com/",
    },
    {
      title: "WISTA Adlershof Science Park",
      desc: "Europas modernster Technologiepark für High-Tech, Photonik & Quantencomputing.",
      tag: "DeepTech Hub",
      source: "WISTA Management Adlershof",
      href: "https://www.adlershof.de/",
    },
  ];

  const kpis = [
    {
      label: "Risikokapital (H1 2026)",
      value: "1,7 Mrd. €",
      detail: "+10 % · Platz 1 in Deutschland",
      source: "EY Startup-Barometer, Juli 2026",
      href: "https://www.ey.com/de_de/newsroom/2026/07/ey-startup-barometer-deutschland-juli-2026",
    },
    {
      label: "IBB GründungsBONUS Plus",
      value: "50.000 €",
      detail: "Zuschuss ohne Eigenkapitalzwang",
      source: "Investitionsbank Berlin (IBB)",
      href: "https://www.ibb.de/de/foerderprogramme/gruendungsbonus-plus.html",
    },
    {
      label: "Stichtag E-Rechnung (B2B)",
      value: "01.01.2027",
      detail: "ab > 800.000 € Vorjahresumsatz",
      source: "Bundesfinanzministerium · BMF-Schreiben",
      href: "https://www.bundesfinanzministerium.de/Web/DE/Themen/Steuern/Steuerarten/Umsatzsteuer/BMF_Schreiben_Allgemeines/bmf_schreiben_allgemeines.html",
    },
  ];

  return (
    <section className="relative max-w-7xl mx-auto px-5 sm:px-8 pt-6 sm:pt-10 pb-16 overflow-hidden bg-blueprint-grid">
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-stretch max-w-full overflow-hidden">
        {/* Left Column: Display Headline & Copy
            justify-start: die Spalte ist seit dem Umzug des AI-Act-Blocks
            deutlich kürzer als die Radar-Spalte. Zentriert liesse das oben
            eine grosse Lücke, verteilt würde es Badge, Headline und Copy
            auseinanderziehen — oben bündig stehen die beiden Badges links
            und rechts wieder auf einer Linie. */}
        <div className="lg:col-span-7 space-y-5 flex flex-col justify-start max-w-full overflow-hidden">
          {/* Parallel Eyebrow Badge Left: Live-Stand der Webseite */}
          <div className="flex items-center gap-3 max-w-full overflow-hidden">
            <SiteStatusBadge />
          </div>

          <h1
            className="font-black tracking-tight leading-[1.03] break-words max-w-full"
            style={{ ...fontDisplay, color: T.text, fontSize: "clamp(1.9rem, 5.2vw, 4.75rem)" }}
          >
            {t("hero.title1")}
            <br />
            {t("hero.title2pre")}
            <span className="relative inline-block text-blue-600 dark:text-blue-400 px-1.5 underline decoration-blue-600/30 underline-offset-8">
              Berlin
            </span>
            {t("hero.title2post")}
          </h1>

          <p className="text-base sm:text-lg leading-relaxed font-normal max-w-xl break-words" style={{ color: T.muted }}>
            {t("hero.sub")}
          </p>
        </div>

        {/* Right Column: BERLIN STARTUP & ECOSYSTEM RADAR 2026 */}
        <div className="lg:col-span-5 flex flex-col justify-between max-w-full overflow-hidden">
          {/* Parallel Eyebrow Badge Right (Über dem Bild). Der Live-Stand
              steht seit dem Umbau links im SiteStatusBadge — zweimal in
              derselben Hero wäre doppelt. */}
          <div className="flex flex-wrap items-center justify-between gap-2 mb-5 max-w-full overflow-hidden">
            <FernsehturmBadge label="BERLIN METROPOL RADAR 🌙" />
          </div>

          <div className="rounded-2xl relative overflow-hidden transition-all duration-300 shadow-lg border border-slate-200 flex-1 flex flex-col justify-between">
            {/* Full Background: Berlin Moonlight Skyline */}
            <AIImageOverlay
              src="/images/berlin_moonlight_skyline.png"
              alt="Berlin Moonlight Tech Skyline"
              className="absolute inset-0 w-full h-full"
              imgClassName="w-full h-full object-cover"
            />
            {/* Lightened Overlay for enhanced image visibility & readability */}
            <div className="absolute inset-0 bg-gradient-to-b from-slate-950/25 via-slate-950/45 to-slate-950/70" />

            {/* Pulsierendes Mondschein-Aura-Licht direkt über dem Berliner Vollmond */}
            <div
              className="absolute top-[4%] right-[16%] sm:right-[20%] w-44 h-44 sm:w-56 sm:h-56 rounded-full pointer-events-none mix-blend-screen animate-moon-halo-pulse z-[5]"
              style={{
                background: "radial-gradient(circle, rgba(191, 219, 254, 0.75) 0%, rgba(96, 165, 250, 0.3) 45%, rgba(0, 0, 0, 0) 70%)",
              }}
            />

            {/* Content on top of background */}
            <div className="relative z-10 p-5 sm:p-6 flex-1 flex flex-col justify-between">

              {/* Interactive Control Tabs */}
              <div className="grid grid-cols-3 gap-1.5 bg-white/10 backdrop-blur-sm p-1 rounded-lg mb-5 border border-white/15">
                <button
                  type="button"
                  onClick={() => setActiveTab("trends")}
                  className={`py-2 px-2 rounded-md text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                    activeTab === "trends"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                  style={{ ...fontDisplay }}
                >
                  <Rocket size={13} /> Trends
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("hubs")}
                  className={`py-2 px-2 rounded-md text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                    activeTab === "hubs"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                  style={{ ...fontDisplay }}
                >
                  <Building2 size={13} /> Tech-Hubs
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("kpis")}
                  className={`py-2 px-2 rounded-md text-xs font-bold flex items-center justify-center gap-1 transition-all ${
                    activeTab === "kpis"
                      ? "bg-blue-600 text-white shadow-md"
                      : "text-white/70 hover:text-white"
                  }`}
                  style={{ ...fontDisplay }}
                >
                  <BarChart3 size={13} /> KPIs
                </button>
              </div>

              {/* TAB 1: Trends 2026 */}
              {activeTab === "trends" && (
                <div className="space-y-3">
                  {trends.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-3.5 rounded-xl bg-white/8 backdrop-blur-sm border border-white/12 hover:border-blue-400/50 hover:bg-white/14 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono uppercase font-bold text-amber-400 bg-amber-500/15 px-2 py-0.5 rounded border border-amber-500/25">
                          {item.tag}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-blue-400 group-hover:underline">
                          <span>Quelle: {item.source}</span>
                          <ExternalLink size={11} className="shrink-0" />
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors" style={{ ...fontDisplay }}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </a>
                  ))}
                </div>
              )}

              {/* TAB 2: Berlin Tech Hubs */}
              {activeTab === "hubs" && (
                <div className="space-y-3">
                  {hubs.map((item) => (
                    <a
                      key={item.title}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-3.5 rounded-xl bg-white/8 backdrop-blur-sm border border-white/12 hover:border-blue-400/50 hover:bg-white/14 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-2 mb-1.5">
                        <span className="text-[10px] font-mono uppercase font-bold text-blue-400 bg-blue-500/15 px-2 py-0.5 rounded border border-blue-500/25">
                          {item.tag}
                        </span>
                        <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-blue-400 group-hover:underline">
                          <span>Quelle: {item.source}</span>
                          <ExternalLink size={11} className="shrink-0" />
                        </div>
                      </div>
                      <h4 className="text-sm font-bold text-white group-hover:text-blue-300 transition-colors" style={{ ...fontDisplay }}>
                        {item.title}
                      </h4>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {item.desc}
                      </p>
                    </a>
                  ))}
                </div>
              )}

              {/* TAB 3: Berlin Startup KPIs */}
              {activeTab === "kpis" && (
                <div className="space-y-3 text-xs">
                  {kpis.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block p-3.5 rounded-xl bg-white/8 backdrop-blur-sm border border-white/12 hover:border-blue-400/50 hover:bg-white/14 transition-all cursor-pointer"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <div>
                          <div className="flex items-center gap-1 text-[11px] font-mono font-semibold text-blue-400 mb-0.5 group-hover:underline">
                            <span>Quelle: {item.source}</span>
                            <ExternalLink size={11} className="shrink-0" />
                          </div>
                          <span className="text-white font-bold block text-xs">{item.label}</span>
                          <span className="text-slate-400 text-[11px]">{item.detail}</span>
                        </div>
                        <span className="text-lg font-black text-amber-400 font-mono group-hover:scale-105 transition-transform">{item.value}</span>
                      </div>
                    </a>
                  ))}
                </div>
              )}

              {/* Footer Link */}
              <div className="pt-4 mt-4 border-t border-white/15 flex items-center justify-between text-xs text-slate-400">
                <span style={{ ...fontMono }}>herotax.de · Verifizierte Daten</span>
                <a
                  href="/news"
                  onClick={(e) => {
                    if (e && (e.metaKey || e.ctrlKey)) return;
                    e.preventDefault();
                    window.history.pushState({}, "", "/news");
                    window.dispatchEvent(new Event("popstate"));
                  }}
                  className="text-blue-400 font-bold hover:text-blue-300 inline-flex items-center gap-1"
                >
                  Hauptstadt News lesen <ChevronRight size={13} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
