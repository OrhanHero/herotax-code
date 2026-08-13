import { Sun, Moon } from "lucide-react";
import { useTheme } from "../../theme";
import { useLang } from "../../i18n";
import { T, fontDisplay } from "../../config/tokens";

/**
 * ThemeSwitcher — Dezenter Light/Dark Mode Toggle Button im Header.
 * · Zeigt Sonne im Dark Mode & Mond im Light Mode (intuitive Aktion)
 * · Sanfter Übergang & Barrierefrei (aria-label, keyboard focus)
 */
const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();
  const { t } = useLang();

  const label = isDark
    ? t("header.themeLight") || "Zum Helligkeitsmodus wechseln"
    : t("header.themeDark") || "Zum Dunkelmodus wechseln";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className="relative inline-flex items-center justify-center p-2 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 focus:outline-none focus-visible:ring-2 shrink-0"
      style={{
        ...fontDisplay,
        color: isDark ? "#FACC15" : T.muted,
        backgroundColor: isDark ? "rgba(250, 204, 21, 0.12)" : T.wash,
        border: `1px solid ${isDark ? "rgba(250, 204, 21, 0.3)" : T.line}`,
      }}
    >
      {isDark ? (
        <Sun size={17} className="transition-transform duration-300 rotate-0 hover:rotate-45 text-amber-400" />
      ) : (
        <Moon size={17} className="transition-transform duration-300 -rotate-12 hover:rotate-0 text-slate-700" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
