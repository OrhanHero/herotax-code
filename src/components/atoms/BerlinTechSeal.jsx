import { fontMono, T } from "../../config/tokens";
import { FernsehturmIcon } from "./FernsehturmBadge";

/**
 * BerlinTechSeal — Technisches Amtssiegel & Zertifizierungs-Stempel
 * Verleiht der Seite den rohen Berliner Behörden- & Tech-Blueprint-Vibe.
 */
const BerlinTechSeal = ({ label = "GEPRÜFT · BEHÖRDEN-DATA 2026" }) => {
  return (
    <div
      className="stamp-seal inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg text-xs font-bold uppercase tracking-widest select-none shadow-xs"
      style={{ ...fontMono }}
    >
      <FernsehturmIcon size={14} color={T.berlinRed} />
      <span>{label}</span>
    </div>
  );
};

export default BerlinTechSeal;
