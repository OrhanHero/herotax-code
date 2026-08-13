import { createContext, useContext } from "react";
import de from "./locales/de.json";
import en from "./locales/en.json";
import tr from "./locales/tr.json";
import ar from "./locales/ar.json";
import ku from "./locales/ku.json";

/* ── INTERNATIONALISIERUNG (i18n) ─────────────────────────────────
   · LANGUAGES ....... verfügbare Sprachen inkl. Schreibrichtung
   · I18N ............ Übersetzungs-Objekt, geladen aus JSON-Dateien
                       pro Sprache (flache Keys). Fehlende Keys fallen
                       automatisch auf Deutsch zurück — neue Sprachen
                       können also schrittweise gepflegt werden.
   · Persistenz ...... localStorage MIT In-Memory-Fallback: In der
                       Claude.ai-Artefakt-Vorschau ist localStorage
                       blockiert; der try/catch-Wrapper verhindert
                       Abstürze. Im echten Deployment (herotax.de)
                       greift localStorage normal und die Sprachwahl
                       übersteht jeden Reload.
   · HINWEIS Kurdisch: umgesetzt als Kurmancî (Nordkurdisch, lateinische
     Schrift, LTR) — die meistgesprochene kurdische Variante unter den
     Communities in Berlin/Deutschland. AR/KU-Texte vor Launch von
     Muttersprachler:innen prüfen lassen.                              */

export const LANGUAGES = [
  { code: "de", label: "Deutsch", dir: "ltr" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "tr", label: "Türkçe", dir: "ltr" },
  { code: "ku", label: "Kurdî", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
];

export const I18N = { de, en, tr, ar, ku };

const LANG_STORAGE_KEY = "herotax.lang";
let memoryLang = null; // Fallback, wenn localStorage nicht verfügbar ist

export const readStoredLang = () => {
  try {
    return window.localStorage.getItem(LANG_STORAGE_KEY) || memoryLang || "de";
  } catch {
    return memoryLang || "de";
  }
};

export const storeLang = (code) => {
  memoryLang = code;
  try {
    window.localStorage.setItem(LANG_STORAGE_KEY, code);
  } catch {
    /* Artefakt-Vorschau o. Private Mode: In-Memory reicht für die Session */
  }
};

/** Globaler Sprach-Context: stellt lang, setLang, t() und isRTL bereit */
export const LangContext = createContext({
  lang: "de",
  setLang: () => {},
  t: (key) => key,
  isRTL: false,
});

export const useLang = () => useContext(LangContext);
