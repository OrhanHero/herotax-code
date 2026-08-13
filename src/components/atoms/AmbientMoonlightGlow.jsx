/**
 * AmbientMoonlightGlow — Performance-optimierter CSS GPU Moonlight Glow
 * · 100 % Pure CSS (will-change: transform, opacity)
 * · 0 % JavaScript Haupt-Thread Belastung (GPU Compositor Layer)
 * · Verleiht der Seite die magische Berliner Mondschein-Atmosphäre
 */
export default function AmbientMoonlightGlow() {
  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {/* Primary Moonlight Orb (Top Right / Radar Area) */}
      <div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full opacity-35 blur-3xl animate-moonlight-pulse"
        style={{
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.4) 0%, rgba(37, 99, 235, 0.15) 50%, rgba(0, 0, 0, 0) 70%)",
          willChange: "transform, opacity",
        }}
      />

      {/* Secondary Cyber Cyan Ambient Orb (Left Center) */}
      <div
        className="absolute top-1/4 -left-40 w-[700px] h-[700px] rounded-full opacity-25 blur-3xl animate-moonlight-pulse-delayed"
        style={{
          background: "radial-gradient(circle, rgba(99, 102, 241, 0.35) 0%, rgba(59, 130, 246, 0.1) 60%, rgba(0, 0, 0, 0) 80%)",
          willChange: "transform, opacity",
        }}
      />

      {/* Tertiary Soft Emerald Beacon Pulse (Bottom Right) */}
      <div
        className="absolute bottom-1/3 right-10 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl animate-moonlight-pulse"
        style={{
          background: "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(59, 130, 246, 0.08) 60%, rgba(0, 0, 0, 0) 80%)",
          willChange: "transform, opacity",
        }}
      />
    </div>
  );
}
