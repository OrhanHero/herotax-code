import { useState, useMemo, useEffect } from "react";
import { LangContext, LANGUAGES, I18N, readStoredLang, storeLang } from "./i18n";
import { ThemeProvider } from "./theme";
import { T } from "./config/tokens";
import { ARTICLES } from "./data/articles";
import { getArticles } from "./services/articleService";
import NewsTicker from "./components/atoms/NewsTicker";
import BackToTop from "./components/atoms/BackToTop";
import AmbientMoonlightGlow from "./components/atoms/AmbientMoonlightGlow";
import Header from "./components/sections/Header";
import HeroSection from "./components/sections/HeroSection";
import StartseiteFeatureHub from "./components/sections/StartseiteFeatureHub";
import Footer from "./components/sections/Footer";
import KIPage from "./components/pages/KIPage";
import NewsHubPage from "./components/pages/NewsHubPage";
import EUDIWalletPage from "./components/pages/EUDIWalletPage";
import ToolsPage from "./components/pages/ToolsPage";
import LivePage from "./components/pages/LivePage";
import PublikationenPage from "./components/pages/PublikationenPage";
import DatenschutzPage from "./components/pages/DatenschutzPage";
import DSGVOPage from "./components/pages/DSGVOPage";
import ImpressumPage from "./components/pages/ImpressumPage";
import NotFoundPage from "./components/pages/NotFoundPage";

/** Umbenannte Routen: alte Adresse → neue Adresse.
    Auf herotax.de erledigt das der Server per 301. Diese Karte greift
    für den Dev-Server ohne Server-Rewrites und für Verläufe, die noch die alte
    Adresse im History-Stack haben. */
const ROUTE_REDIRECTS = {
  "/eudi-wallet": "/eu-kompass",
};

/** Aktuellen Pfad normalisiert lesen und umbenannte Routen auflösen. */
const readPath = () => {
  if (typeof window === "undefined") return "/";
  const current = window.location.pathname.toLowerCase().replace(/\/$/, "") || "/";
  const target = ROUTE_REDIRECTS[current];
  if (!target) return current;
  window.history.replaceState({}, "", target + window.location.search + window.location.hash);
  return target;
};

export default function HeroTaxPlatform() {
  /* ── Sprach-State (global) ── */
  const [lang, setLang] = useState(readStoredLang);
  const [articles, setArticles] = useState(ARTICLES);
  const [pathname, setPathname] = useState(readPath);
  const activeLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  /* SPA Routing Event Listener */
  useEffect(() => {
    const handlePopState = () => setPathname(readPath());
    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  /** t(key): Übersetzung mit Fallback-Kette gewählte Sprache → Deutsch → Key */
  const t = useMemo(() => {
    const dict = I18N[lang] || {};
    const base = I18N.de;
    return (key) => dict[key] ?? base[key] ?? key;
  }, [lang]);

  // Lade Artikel mit Caching & Update-Logik
  useEffect(() => {
    getArticles("general").then((data) => {
      setArticles(data);
    });
  }, []);

  useEffect(() => {
    storeLang(lang);
    try {
      document.documentElement.lang = lang;
      document.documentElement.dir = activeLang.dir;
    } catch {
      /* SSR / eingeschränkte Umgebungen */
    }
  }, [lang, activeLang.dir]);

  const isLegalPage = pathname === "/datenschutz" || pathname === "/impressum";

  const renderContent = () => {
    switch (pathname) {
      case "/":
        return (
          <>
            <HeroSection />
            <StartseiteFeatureHub />
          </>
        );
      case "/ki":
        return <KIPage />;
      case "/news":
        return <NewsHubPage />;
      case "/eu-kompass":
        return <EUDIWalletPage />;
      case "/tools":
        return <ToolsPage />;
      case "/live":
        return <LivePage />;
      case "/publikationen":
        return <PublikationenPage />;
      case "/dsgvo":
        return <DSGVOPage />;
      case "/datenschutz":
        return <DatenschutzPage />;
      case "/impressum":
        return <ImpressumPage />;
      default:
        return <NotFoundPage />;
    }
  };

  return (
    <ThemeProvider>
      <LangContext.Provider value={{ lang, setLang, t, isRTL: activeLang.dir === "rtl" }}>
        <div
          className="min-h-screen antialiased overflow-x-hidden w-full max-w-full relative transition-colors duration-300"
          dir={activeLang.dir}
          style={{ backgroundColor: T.paper, color: T.text }}
        >
          <AmbientMoonlightGlow />
          <Header />
          {!isLegalPage && <NewsTicker items={articles} />}

          <main>{renderContent()}</main>

          <Footer />
          <BackToTop />
        </div>
      </LangContext.Provider>
    </ThemeProvider>
  );
}

