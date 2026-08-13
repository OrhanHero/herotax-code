import { Building2, Landmark } from "lucide-react";
import { T, fontMono } from "../../config/tokens";

const CategoryTag = ({ cat }) => {
  const isBerlin = cat === "Berlin Fokus";
  const Icon = isBerlin ? Building2 : Landmark;
  return (
    <span
      className="inline-flex items-center gap-1.5 text-xs px-2.5 py-1 rounded-full uppercase tracking-wider"
      style={{
        ...fontMono,
        color: isBerlin ? T.blue : T.text,
        backgroundColor: isBerlin ? T.blueDim : T.wash,
        border: `1px solid ${isBerlin ? T.blueBorder : T.line}`,
      }}
    >
      <Icon size={11} />
      {cat}
    </span>
  );
};

export default CategoryTag;
