import { T, fontDisplay, fontMono } from "../../config/tokens";

/** Gemeinsamer, heller Karten-Rahmen für alle Tools */
const ToolCard = ({ icon: Icon, title, subtitle, children }) => (
  <div
    className="glass-card card-lift rounded-3xl p-7 flex flex-col gap-6 h-full relative overflow-hidden"
    style={{ borderLeft: `3px solid ${T.blue}` }}
  >
    {/* Subtle top-right moonlight shimmer glow */}
    <div
      className="absolute -top-10 -right-10 w-32 h-32 rounded-full pointer-events-none"
      style={{ background: `radial-gradient(circle, ${T.blueDim} 0%, transparent 70%)` }}
      aria-hidden="true"
    />
    <div className="flex items-center gap-4 relative">
      <span
        className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 moon-glow-pulse"
        style={{ backgroundColor: T.blueDim, border: `1px solid ${T.blueBorder}` }}
      >
        <Icon size={22} style={{ color: T.blue }} />
      </span>
      <div>
        <h3 className="text-lg font-bold" style={{ ...fontDisplay, color: T.text }}>
          {title}
        </h3>
        <p className="text-xs" style={{ ...fontMono, color: T.faint }}>
          {subtitle}
        </p>
      </div>
    </div>
    {children}
  </div>
);

export default ToolCard;

