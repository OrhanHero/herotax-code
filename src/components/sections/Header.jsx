import { useState, useEffect } from "react";
import { useLang } from "../../i18n";
import { CONFIG } from "../../config/config";
import { T, fontDisplay } from "../../config/tokens";
import WhatsAppGlyph from "../atoms/WhatsAppGlyph";
import LanguageSwitcher from "../atoms/LanguageSwitcher";
import ThemeSwitcher from "../atoms/ThemeSwitcher";

/** Sticky Navbar mit Logo, Hauptnavigation, Sprachwahl und CTA */
const Header = () => {
  const { t } = useLang();
  const [currentPath, setCurrentPath] = useState(
    typeof window !== "undefined" ? window.location.pathname.toLowerCase().replace(/\/$/, "") || "/" : "/"
  );

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname.toLowerCase().replace(/\/$/, "") || "/";
      setCurrentPath(path);
    };
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path, e) => {
    if (e && (e.metaKey || e.ctrlKey)) return;
    if (e) e.preventDefault();
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
  };

  const navLinks = [
    { href: "/ki", label: t("nav.ki") },
    { href: "/news", label: t("nav.news") },
    { href: "/eu-kompass", label: t("nav.euKompass") },
    { href: "/tools", label: t("nav.tools") },
    { href: "/live", label: t("nav.live") },
    { href: "/publikationen", label: t("nav.publications") },
    { href: "/dsgvo", label: t("nav.privacy") },
  ];

  return (
    <header
      className="sticky top-0 z-50 backdrop-blur-xl transition-all duration-300 border-b"
      style={{ backgroundColor: "var(--color-header-bg, rgba(248,248,244,0.94))", borderColor: T.line }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <a
            href="/"
            onClick={(e) => navigate("/", e)}
            className="font-black text-xl tracking-tight flex items-center gap-2.5"
            style={{ ...fontDisplay, color: T.text }}
          >
            <img
              src="/images/berlin_moonlight_skyline.png"
              alt="HERO Tax Logo - Berlin Moonlight Skyline"
              className="h-9 w-9 rounded-lg object-cover border border-slate-300/80 shadow-xs"
            />
            <span>HERO</span> <span style={{ color: T.blue }}>Tax</span>
          </a>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold" aria-label="Hauptnavigation">
          {navLinks.map((link) => {
            const isActive = currentPath === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => navigate(link.href, e)}
                className={`transition-colors hover:text-blue-600 ${isActive ? "text-blue-600 dark:text-blue-400 font-bold underline underline-offset-4" : ""}`}
                style={{ color: isActive ? T.blue : T.muted }}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
        <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
          <ThemeSwitcher />
          <LanguageSwitcher />
          <a
            href={CONFIG.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold transition-all duration-200 hover:shadow-md active:scale-95 focus:outline-none focus-visible:ring-2 shrink-0"
            style={{ ...fontDisplay, backgroundColor: T.blue, color: T.blueInk }}
          >
            <WhatsAppGlyph size={15} />
            <span className="hidden xs:inline">{t("cta.joinShort")}</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;

