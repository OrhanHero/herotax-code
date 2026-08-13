import { Cpu, Newspaper, Wallet, Wrench, Radio, BookOpen, ArrowRight } from "lucide-react";
import { useLang } from "../../i18n";
import { T, fontDisplay, fontMono, cardBase } from "../../config/tokens";

export default function StartseiteFeatureHub() {
  const { t } = useLang();

  const navigate = (path, e) => {
    if (e && (e.metaKey || e.ctrlKey)) return;
    if (e) e.preventDefault();
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
  };

  const featureCards = [
    {
      href: "/ki",
      icon: Cpu,
      title: t("nav.ki"),
      subtitle: "Agentic AI, Beleg-Automatisierung & BSI/BMDS Live-Feeds",
      accent: "#3B82F6",
      iconBg: "rgba(59, 130, 246, 0.1)",
      iconBorder: "rgba(59, 130, 246, 0.25)",
      cardBg: "linear-gradient(135deg, rgba(59, 130, 246, 0.08) 0%, var(--color-card, #FFFFFF) 100%)",
      cardBorder: "rgba(59, 130, 246, 0.2)",
    },
    {
      href: "/news",
      icon: Newspaper,
      title: t("nav.news"),
      subtitle: "Hauptstadt-Kiosk: Berlin-Fokus, Bundesgesetze & DeutschlandGPT",
      accent: "#10B981",
      iconBg: "rgba(16, 185, 129, 0.1)",
      iconBorder: "rgba(16, 185, 129, 0.25)",
      cardBg: "linear-gradient(135deg, rgba(16, 185, 129, 0.08) 0%, var(--color-card, #FFFFFF) 100%)",
      cardBorder: "rgba(16, 185, 129, 0.2)",
    },
    {
      href: "/eu-kompass",
      icon: Wallet,
      title: t("nav.euKompass"),
      subtitle: "EUDI-Wallet (eIDAS 2.0) & EU AI Act: Regeln, Strafen & Fristen",
      accent: "#6366F1",
      iconBg: "rgba(99, 102, 241, 0.1)",
      iconBorder: "rgba(99, 102, 241, 0.25)",
      cardBg: "linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, var(--color-card, #FFFFFF) 100%)",
      cardBorder: "rgba(99, 102, 241, 0.2)",
    },
    {
      href: "/tools",
      icon: Wrench,
      title: t("nav.tools"),
      subtitle: "USt-Rechner, FristenCheck & Interaktive Guides direkt im Browser",
      accent: "#D97706",
      iconBg: "rgba(245, 158, 11, 0.12)",
      iconBorder: "rgba(245, 158, 11, 0.25)",
      cardBg: "linear-gradient(135deg, rgba(245, 158, 11, 0.08) 0%, var(--color-card, #FFFFFF) 100%)",
      cardBorder: "rgba(245, 158, 11, 0.22)",
    },
    {
      href: "/live",
      icon: Radio,
      title: t("nav.live"),
      subtitle: "Daily Tax Hacks, WhatsApp Channel & Social Community",
      accent: "#EC4899",
      iconBg: "rgba(236, 72, 153, 0.1)",
      iconBorder: "rgba(236, 72, 153, 0.25)",
      cardBg: "linear-gradient(135deg, rgba(236, 72, 153, 0.08) 0%, var(--color-card, #FFFFFF) 100%)",
      cardBorder: "rgba(236, 72, 153, 0.2)",
    },
    {
      href: "/publikationen",
      icon: BookOpen,
      title: t("nav.publications"),
      subtitle: "BfDI, BMF & BSI Leitfäden, Broschüren & Downloads",
      accent: "#0891B2",
      iconBg: "rgba(6, 182, 212, 0.1)",
      iconBorder: "rgba(6, 182, 212, 0.25)",
      cardBg: "linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, var(--color-card, #FFFFFF) 100%)",
      cardBorder: "rgba(6, 182, 212, 0.2)",
    },
  ];

  return (
    <section className="py-16 border-t" style={{ borderColor: T.lineSoft }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <div>
            <p className="text-xs uppercase tracking-widest mb-2 font-bold" style={{ ...fontMono, color: T.blue }}>
              HERO Tax Platform · Themenwelten
            </p>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight" style={{ ...fontDisplay, color: T.text }}>
              Entdecke die Spezialbereiche
            </h2>
          </div>
          <p className="text-sm max-w-md" style={{ color: T.muted }}>
            Jeder Bereich mit eigenen Echtzeit-Daten, amtlichen Quellen und Werkzeugen für Unternehmer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featureCards.map((card) => {
            const Icon = card.icon;
            return (
              <a
                key={card.href}
                href={card.href}
                onClick={(e) => navigate(card.href, e)}
                className="group rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-md focus:outline-none focus-visible:ring-2"
                style={{
                  ...cardBase,
                  background: card.cardBg,
                  border: `1px solid ${card.cardBorder}`,
                }}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="w-11 h-11 rounded-2xl flex items-center justify-center shrink-0 transition-transform group-hover:scale-110"
                      style={{ backgroundColor: card.iconBg, border: `1px solid ${card.iconBorder}` }}
                    >
                      <Icon size={20} style={{ color: card.accent }} />
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight mb-2 group-hover:text-blue-600 transition-colors" style={{ ...fontDisplay, color: T.text }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-6" style={{ color: T.muted }}>
                    {card.subtitle}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-sm font-bold text-blue-600 dark:text-blue-400 pt-4" style={{ borderTop: `1px solid ${card.cardBorder}` }}>
                  <span>Bereich öffnen</span>
                  <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
