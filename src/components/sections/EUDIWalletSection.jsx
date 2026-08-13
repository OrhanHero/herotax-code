import { ExternalLink, Wallet } from "lucide-react";
import { T, fontDisplay, fontMono } from "../../config/tokens";
import { EUDI_TIMELINE } from "../../data/eudiWallet";
import Eyebrow from "../atoms/Eyebrow";
import AIImageOverlay from "../atoms/AIImageOverlay";

/** Säule 03 · EUDI-Wallet (Digitale Identität der EU)
    Eigener Bereich für Stand & Zeitplan des European Digital Identity
    Wallet — hochrelevant für Unternehmer:innen (KYC, Vertragsunterschrift,
    künftig ggf. Behördengänge), EU-Frist ist der 24. Dezember 2026. */
const EUDIWalletSection = () => (
  <section className="py-24" style={{ borderTop: `1px solid ${T.lineSoft}` }} id="eudi-wallet">
    <div className="max-w-7xl mx-auto px-5 sm:px-8">
      {/* Die 03 benennt den Bereich EU-Kompass, nicht nur den Wallet-Teil —
          der AI Act weiter unten gehört dazu und führt deshalb keine
          eigene Nummer. */}
      <Eyebrow index="03">EU-Kompass · EUDI-Wallet & EU AI Act</Eyebrow>
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
        <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight max-w-2xl" style={{ ...fontDisplay, color: T.text }}>
          Ein Ausweis fürs Smartphone.
          <br />
          <span style={{ color: T.faint }}>Für ganz Europa.</span>
        </h2>
        <p className="text-sm max-w-xs" style={{ color: T.muted }}>
          Die EU-Frist ist der 24. Dezember 2026, Deutschland startet am
          2. Januar 2027 — Stand, Zeitplan und was das für dich als
          Unternehmer:in bedeutet, an einer Stelle.
        </p>
      </div>

      <div
        className="rounded-3xl p-8 sm:p-10"
        style={{ background: `linear-gradient(135deg, ${T.blue} 0%, #1725A8 100%)` }}
      >
        <div className="grid lg:grid-cols-12 gap-8 items-center mb-8">
          <div className="lg:col-span-7 flex items-center gap-3">
            <span
              className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: "rgba(255,255,255,0.12)", border: "1px solid rgba(255,255,255,0.25)" }}
            >
              <Wallet size={24} style={{ color: "#FFFFFF" }} />
            </span>
            <div>
              <h3 className="text-xl sm:text-2xl font-black tracking-tight" style={{ ...fontDisplay, color: "#FFFFFF" }}>
                EUDI-Wallet: Stand & Zeitplan
              </h3>
              <p className="text-xs" style={{ ...fontMono, color: "rgba(255,255,255,0.65)" }}>
                Offizielle Quellen: BMDS (Deutschland) · Europäische Kommission (EU) · Verbraucherzentrale
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 flex justify-end">
            <AIImageOverlay
              src="/images/eudi_wallet_berlin.png"
              alt="EUDI Wallet Berlin Digital Identity 3D Visual"
              className="w-full rounded-2xl border border-white/20 shadow-lg"
              imgClassName="w-full h-32 object-cover rounded-2xl"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {EUDI_TIMELINE.map((item) => (
            <a
              key={item.title}
              href={item.source.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl p-6 flex flex-col transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2"
              style={{ backgroundColor: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.18)" }}
            >
              <div className="flex items-start justify-between gap-3 mb-3">
                <span
                  className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                  style={{ backgroundColor: "rgba(255,255,255,0.12)" }}
                >
                  <item.icon size={17} style={{ color: "#FFFFFF" }} />
                </span>
                <ExternalLink
                  size={16}
                  className="shrink-0 opacity-50 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  style={{ color: "#FFFFFF" }}
                />
              </div>
              <h4 className="font-bold leading-snug mb-2" style={{ ...fontDisplay, color: "#FFFFFF" }}>
                {item.title}
              </h4>
              <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "rgba(255,255,255,0.75)" }}>
                {item.text}
              </p>
              <span
                className="inline-flex items-center gap-1.5 text-xs"
                style={{ ...fontMono, color: "rgba(255,255,255,0.85)" }}
              >
                <ExternalLink size={11} />
                Quelle: {item.source.label}
              </span>
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default EUDIWalletSection;
