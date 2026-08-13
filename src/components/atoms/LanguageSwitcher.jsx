import { useState } from "react";
import { Globe, ChevronDown } from "lucide-react";
import { useLang, LANGUAGES } from "../../i18n";
import { T, fontDisplay, fontMono } from "../../config/tokens";

/**
 * LanguageSwitcher — dezentes Dropdown im Header.
 * · Zeigt die aktive Sprache (Code) mit Globus-Icon
 * · Öffnet ein Panel mit allen Sprachen in ihrer Eigenbezeichnung
 * · Schließt bei Auswahl und bei Klick außerhalb (Blur)
 * · Barrierefrei: aria-expanded, aria-label, Tastatur-bedienbar
 */
const LanguageSwitcher = () => {
  const { lang, setLang } = useLang();
  const [open, setOpen] = useState(false);
  const active = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  return (
    <div
      className="relative"
      onBlur={(e) => {
        // Schließen, wenn der Fokus das gesamte Dropdown verlässt
        if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false);
      }}
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="listbox"
        aria-label={`Sprache wählen — aktuell: ${active.label}`}
        className="inline-flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2"
        style={{
          ...fontDisplay,
          color: T.muted,
          backgroundColor: open ? T.wash : "transparent",
          border: `1px solid ${open ? T.line : "transparent"}`,
        }}
      >
        <Globe size={15} />
        <span className="uppercase" style={fontMono}>{active.code}</span>
        <ChevronDown
          size={13}
          className="transition-transform duration-200"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>

      {open && (
        <ul
          role="listbox"
          aria-label="Verfügbare Sprachen"
          className="absolute end-0 mt-2 py-1.5 w-44 rounded-2xl z-50"
          style={{ backgroundColor: T.card, border: `1px solid ${T.line}`, boxShadow: T.shadow }}
        >
          {LANGUAGES.map((l) => (
            <li key={l.code}>
              <button
                role="option"
                aria-selected={l.code === lang}
                onClick={() => {
                  setLang(l.code);
                  setOpen(false);
                }}
                dir={l.dir}
                className="w-full flex items-center justify-between gap-3 px-4 py-2.5 text-sm text-start transition-colors duration-150 focus:outline-none focus-visible:ring-2"
                style={{
                  color: l.code === lang ? T.blue : T.text,
                  fontWeight: l.code === lang ? 700 : 500,
                  backgroundColor: l.code === lang ? T.blueDim : "transparent",
                }}
              >
                <span>{l.label}</span>
                <span className="text-xs uppercase" style={{ ...fontMono, color: T.faint }}>
                  {l.code}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageSwitcher;
