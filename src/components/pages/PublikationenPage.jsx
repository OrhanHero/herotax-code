import { useEffect } from "react";
import { ExternalLink } from "lucide-react";
import { T, fontDisplay, fontMono, cardBase } from "../../config/tokens";
import { BFDI_PUBLICATIONS, BFDI_ITEMS } from "../../data/privacy";
import Eyebrow from "../atoms/Eyebrow";

export default function PublikationenPage() {
  useEffect(() => {
    document.title = "Publikationen & Leitfäden · HERO Tax";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-4">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline underline-offset-4 mb-6"
          style={{ ...fontMono, color: T.blue }}
        >
          ← Zurück zur Startseite
        </a>

        <Eyebrow index="06">Publikationen & Offizielle Leitfäden</Eyebrow>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight" style={{ ...fontDisplay, color: T.text }}>
            Verifizierte Quellen &<br />
            <span style={{ color: T.blue }}>Amtliche Downloads.</span>
          </h1>
          <p className="text-sm max-w-xs" style={{ color: T.muted }}>
            Offizielle Broschüren, Leitfäden und Hintergrundpapiere von BfDI, BMF, BSI und BMDS auf einen Blick.
          </p>
        </div>

        {/* BfDI Haupt-Publikationen */}
        <div className="rounded-3xl p-8 sm:p-10 mb-10" style={{ backgroundColor: T.wash, border: `1px solid ${T.lineSoft}` }}>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <p className="text-xs uppercase tracking-widest mb-2" style={{ ...fontMono, color: T.faint }}>
                BfDI · Bundesbeauftragte für den Datenschutz
              </p>
              <h2 className="text-2xl font-black tracking-tight" style={{ ...fontDisplay, color: T.text }}>
                Broschüren, Flyer & Lernmaterial
              </h2>
            </div>
            <a
              href="https://www.bfdi.bund.de/DE/Service/Publikationen/publikationen_node.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-semibold hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 rounded"
              style={{ color: T.blue }}
            >
              Alle BfDI-Publikationen
              <ExternalLink size={14} />
            </a>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {BFDI_PUBLICATIONS.map(({ icon: Icon, title, text, href }) => (
              <a
                key={title}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group rounded-2xl p-5 flex flex-col justify-between transition-all duration-200 hover:-translate-y-1 focus:outline-none focus-visible:ring-2"
                style={cardBase}
              >
                <div>
                  <Icon size={20} className="mb-3" style={{ color: T.blue }} />
                  <h3 className="font-bold text-sm mb-1.5" style={{ ...fontDisplay, color: T.text }}>
                    {title}
                  </h3>
                  <p className="text-xs leading-relaxed mb-4" style={{ color: T.muted }}>
                    {text}
                  </p>
                </div>
                <span className="inline-flex items-center gap-1 text-xs font-semibold" style={{ color: T.blue }}>
                  Öffnen <ExternalLink size={12} />
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* Fachthemen & Stellungnahmen */}
        <div className="rounded-3xl p-8 sm:p-10" style={{ backgroundColor: T.card, border: `1px solid ${T.line}` }}>
          <h2 className="text-2xl font-black tracking-tight mb-6" style={{ ...fontDisplay, color: T.text }}>
            Aktuelle Fachthemen & Handreichungen
          </h2>

          <div className="grid md:grid-cols-2 gap-5">
            {BFDI_ITEMS.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl p-6 flex flex-col justify-between transition-all duration-200 hover:border-blue-400"
                style={{ backgroundColor: T.wash, border: `1px solid ${T.lineSoft}` }}
              >
                <div>
                  <h3 className="font-bold text-base leading-snug mb-2" style={{ ...fontDisplay, color: T.text }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: T.muted }}>
                    {item.text}
                  </p>
                </div>
                <a
                  href={item.source.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
                >
                  <ExternalLink size={12} />
                  {item.source.label}
                </a>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
