import { useState, useMemo } from "react";
import { Calculator } from "lucide-react";
import { T, fontDisplay, fontMono } from "../../config/tokens";
import ToolCard from "./ToolCard";

/** TOOL 1 · USt-Rechner — Netto ↔ Brutto, Ergebnis live via useMemo */
const UStRechner = () => {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(19);
  const [direction, setDirection] = useState("nettoToBrutto");

  const result = useMemo(() => {
    const val = parseFloat(String(amount).replace(",", "."));
    if (isNaN(val) || val < 0) return null;
    const f = rate / 100;
    if (direction === "nettoToBrutto") {
      const ust = val * f;
      return { base: val, ust, total: val + ust };
    }
    const netto = val / (1 + f);
    return { base: netto, ust: val - netto, total: val };
  }, [amount, rate, direction]);

  const fmt = (n) => n.toLocaleString("de-DE", { style: "currency", currency: "EUR" });

  const Toggle = ({ active, onClick, children }) => (
    <button
      onClick={onClick}
      className="px-3 py-1.5 rounded-full text-xs font-semibold transition-colors duration-200 focus:outline-none focus-visible:ring-2"
      style={{
        ...fontDisplay,
        backgroundColor: active ? T.blue : T.card,
        color: active ? T.blueInk : T.muted,
        border: `1px solid ${active ? T.blue : T.line}`,
      }}
    >
      {children}
    </button>
  );

  return (
    <ToolCard icon={Calculator} title="USt-Rechner" subtitle="Netto ↔ Brutto · live">
      <div className="flex flex-wrap gap-2">
        <Toggle active={direction === "nettoToBrutto"} onClick={() => setDirection("nettoToBrutto")}>
          Netto → Brutto
        </Toggle>
        <Toggle active={direction === "bruttoToNetto"} onClick={() => setDirection("bruttoToNetto")}>
          Brutto → Netto
        </Toggle>
      </div>
      <div className="flex gap-2">
        <input
          inputMode="decimal"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder={direction === "nettoToBrutto" ? "Netto-Betrag" : "Brutto-Betrag"}
          aria-label="Betrag in Euro"
          className="flex-1 min-w-0 px-4 py-3 rounded-2xl text-base focus:outline-none focus-visible:ring-2"
          style={{ backgroundColor: T.wash, border: `1px solid ${T.line}`, color: T.text }}
        />
        <div className="flex gap-1.5">
          {[19, 7].map((r) => (
            <Toggle key={r} active={rate === r} onClick={() => setRate(r)}>
              {r} %
            </Toggle>
          ))}
        </div>
      </div>

      <div
        className="rounded-2xl p-5 mt-auto"
        style={{ backgroundColor: T.wash, border: `1px solid ${result ? T.blueBorder : T.line}` }}
        aria-live="polite"
      >
        {result ? (
          <dl className="space-y-1.5 text-sm">
            <div className="flex justify-between">
              <dt style={{ color: T.muted }}>Netto</dt>
              <dd style={{ ...fontMono, color: T.text }}>{fmt(result.base)}</dd>
            </div>
            <div className="flex justify-between">
              <dt style={{ color: T.muted }}>USt ({rate} %)</dt>
              <dd style={{ ...fontMono, color: T.text }}>{fmt(result.ust)}</dd>
            </div>
            <div className="flex justify-between pt-2" style={{ borderTop: `1px solid ${T.line}` }}>
              <dt className="font-bold" style={{ color: T.text }}>Brutto</dt>
              <dd className="font-bold" style={{ ...fontMono, color: T.blue }}>{fmt(result.total)}</dd>
            </div>
          </dl>
        ) : (
          <p className="text-sm" style={{ color: T.faint }}>
            Betrag eingeben — das Ergebnis erscheint sofort. Ohne Tam-Tam.
          </p>
        )}
      </div>
    </ToolCard>
  );
};

export default UStRechner;
