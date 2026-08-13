import { ExternalLink } from "lucide-react";
import { T, fontMono } from "../../config/tokens";

/**
 * SourceLink — Pflicht-Baustein für Quellen-Transparenz.
 * Öffnet IMMER in neuem Tab (target="_blank" + rel="noopener noreferrer").
 */
const SourceLink = ({ href, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    onClick={(e) => e.stopPropagation()}
    className="inline-flex items-center gap-1.5 text-xs transition-colors duration-200 hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 rounded"
    style={{ ...fontMono, color: T.blue }}
  >
    <ExternalLink size={11} />
    Quelle: {label}
  </a>
);

export default SourceLink;
