import { fontMono, T } from "../../config/tokens";

/**
 * BrandenburgerTorIcon — Minimalistisches Vektor-Icon des Brandenburger Tors.
 */
export const BrandenburgerTorIcon = ({ size = 22, color = "currentColor" }) => (
  <svg
    width={size}
    height={Math.round(size * 0.7)}
    viewBox="0 0 28 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="inline-block shrink-0"
  >
    {/* Dach / Quadriga Sockel */}
    <rect x="2" y="5" width="24" height="2.5" fill={color} rx="0.5" />
    <path d="M11 2L14 0L17 2H11Z" fill={color} />
    {/* Säulen (6 Säulen) */}
    <rect x="3" y="8" width="2" height="10" fill={color} />
    <rect x="7" y="8" width="2" height="10" fill={color} />
    <rect x="11" y="8" width="2" height="10" fill={color} />
    <rect x="15" y="8" width="2" height="10" fill={color} />
    <rect x="19" y="8" width="2" height="10" fill={color} />
    <rect x="23" y="8" width="2" height="10" fill={color} />
    {/* Sockel / Fundament */}
    <rect x="1" y="18" width="26" height="2" fill={color} rx="0.5" />
  </svg>
);

const BrandenburgerTorBadge = ({ label = "BERLIN STEUER-SCHUTZSCHILD" }) => {
  return (
    <span
      className="inline-flex items-center gap-2 px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider relative"
      style={{
        ...fontMono,
        backgroundColor: T.blueDim,
        border: `1px solid ${T.blueBorder}`,
        color: T.blue,
      }}
    >
      <span className="relative flex h-2 w-2 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-400" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600" />
      </span>
      <BrandenburgerTorIcon size={18} color={T.blue} />
      <span>{label}</span>
    </span>
  );
};

export default BrandenburgerTorBadge;
