/**
 * AIImageOverlay — EU AI Act konformes Overlay-Badge für KI-generierte Bilder.
 * Platziert das offizielle EU-Kennzeichnungs-Symbol (inline SVG) direkt auf dem Bild.
 * Gemäß EU AI Act Art. 50 (Transparenzpflichten) muss jeglicher KI-generierter
 * Inhalt für Menschen erkennbar gekennzeichnet sein.
 */

/** EU-Stern-Kreis Icon (EU-Flaggen-Stil, inline SVG) */
const EUStarsIcon = ({ size = 14 }) => (
  <svg width={size} height={size} viewBox="0 0 20 20" fill="none" aria-hidden="true">
    <circle cx="10" cy="10" r="10" fill="#003399" />
    {/* 12 EU-Sterne */}
    {Array.from({ length: 12 }).map((_, i) => {
      const angle = (i * 30 - 90) * (Math.PI / 180);
      const x = 10 + 6.5 * Math.cos(angle);
      const y = 10 + 6.5 * Math.sin(angle);
      return (
        <polygon
          key={i}
          points="0,-1.4 0.4,-0.4 1.4,-0.4 0.6,0.3 0.9,1.3 0,0.7 -0.9,1.3 -0.6,0.3 -1.4,-0.4 -0.4,-0.4"
          transform={`translate(${x},${y})`}
          fill="#FFDD00"
        />
      );
    })}
  </svg>
);

/**
 * AIImageOverlay — EU AI Act konformes Badge-Overlay
 * @param {string} src - Bildpfad
 * @param {string} alt - Alt-Text
 * @param {string} className - Klassen für den Container
 * @param {string} imgClassName - Klassen für das img-Element
 */
export default function AIImageOverlay({ src, alt, className = "", imgClassName = "" }) {
  return (
    <div className={`relative overflow-hidden group ${className}`}>
      <img src={src} alt={alt} className={imgClassName} loading="lazy" />

      {/* EU AI Act: AI-Generated Overlay Badge */}
      <div
        className="absolute top-2 right-2 z-10 flex items-center gap-1.5 pl-1.5 pr-2.5 py-1 rounded-full backdrop-blur-md shadow-md transition-all duration-200 group-hover:opacity-100"
        style={{
          backgroundColor: "rgba(0, 51, 153, 0.85)",
          border: "1px solid rgba(255,221,0,0.4)",
        }}
        title="EU AI Act Art. 50: Dieses Bild ist vollständig KI-generiert (100% AI Generated)"
      >
        <EUStarsIcon size={15} />
        <span
          className="text-[10px] font-mono font-black tracking-widest uppercase"
          style={{ color: "#FFDD00", letterSpacing: "0.1em" }}
        >
          AI GENERATED
        </span>
      </div>
    </div>
  );
}
