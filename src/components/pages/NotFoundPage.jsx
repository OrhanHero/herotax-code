import { useEffect } from "react";
import { Compass, ArrowLeft } from "lucide-react";
import { T, fontDisplay, fontMono } from "../../config/tokens";

export default function NotFoundPage() {

  useEffect(() => {
    document.title = "404 · Seite nicht gefunden · HERO Tax";
    window.scrollTo(0, 0);
  }, []);

  const navigate = (path, e) => {
    if (e && (e.metaKey || e.ctrlKey)) return;
    if (e) e.preventDefault();
    window.history.pushState({}, "", path);
    window.dispatchEvent(new Event("popstate"));
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-5 sm:px-8 py-16">
      <div className="max-w-md w-full text-center rounded-3xl p-8 sm:p-10 border shadow-md relative overflow-hidden transition-colors" style={{ backgroundColor: T.card, borderColor: T.line }}>
        <div className="w-16 h-16 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mx-auto mb-6 text-blue-600 dark:text-blue-400">
          <Compass size={32} className="animate-spin-slow" />
        </div>

        <span className="inline-block px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest bg-amber-500/10 text-amber-500 border border-amber-500/20 mb-3" style={{ ...fontMono }}>
          404 · Status Code
        </span>

        <h1 className="text-2xl sm:text-3xl font-black tracking-tight mb-3" style={{ ...fontDisplay, color: T.text }}>
          Seite nicht gefunden
        </h1>

        <p className="text-sm leading-relaxed mb-8" style={{ color: T.muted }}>
          Die angeforderte Adresse existiert auf HERO Tax nicht oder wurde verschoben.
        </p>

        <a
          href="/"
          onClick={(e) => navigate("/", e)}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-sm w-full"
          style={{ ...fontDisplay }}
        >
          <ArrowLeft size={16} />
          <span>Zurück zur Startseite</span>
        </a>
      </div>
    </div>
  );
}
