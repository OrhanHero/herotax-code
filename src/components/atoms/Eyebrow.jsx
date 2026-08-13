import { T, fontMono } from "../../config/tokens";

/** Redaktionelle Rubrik-Zeile. index ist optional — ohne Nummer entfällt
    die Spalte ganz, sonst bliebe eine leere Einrückung stehen. */
const Eyebrow = ({ children, index }) => (
  <div className="flex items-baseline gap-4 mb-4">
    {index && (
      <span className="text-xs tracking-widest uppercase" style={{ ...fontMono, color: T.blue }}>
        {index}
      </span>
    )}
    <span className="text-xs tracking-widest uppercase" style={{ ...fontMono, color: T.faint }}>
      {children}
    </span>
    <span className="flex-1 h-px self-center" style={{ backgroundColor: T.line }} />
  </div>
);

export default Eyebrow;
