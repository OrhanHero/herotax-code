/* ── DESIGN TOKENS · "Berliner Amt & Tech Blueprint" ───────────────────────── */
export const T = {
  paper: "var(--color-paper, #F8F8F4)", // Amtspapier-Weiß / Midnight Blue (Dark)
  card: "var(--color-card, #FFFFFF)", // Karten
  wash: "var(--color-wash, #EFEFE8)", // Technisches Amts-Grau / Technical Dark Wash
  line: "var(--color-line, #DFDFD8)", // Hairlines
  lineSoft: "var(--color-line-soft, #E8E8E2)",
  text: "var(--color-text, #121215)", // Amtliches Tiefschwarz / Soft Off-white
  muted: "var(--color-muted, #5A5A62)", // Sekundärtext
  faint: "var(--color-faint, #8E8E98)", // Meta-Angaben
  /* Urbanes Ultramarin — Aktion & Autorität. Im Dark Mode aufgehellt, sonst
     steht das Ultramarin unlesbar auf dem dunklen Grund. blueInk kippt
     entsprechend mit, damit Text auf blauen Flächen lesbar bleibt. */
  blue: "var(--color-blue, #2337E8)",
  blueDim: "var(--color-blue-dim, rgba(35,55,232,0.07))",
  blueBorder: "var(--color-blue-border, rgba(35,55,232,0.22))",
  blueInk: "var(--color-blue-ink, #FFFFFF)", // Text auf Blau
  berlinRed: "#E10600", // Berliner Bär Rot / Amtssiegel
  berlinRedDim: "rgba(225, 6, 0, 0.06)",
  berlinRedBorder: "rgba(225, 6, 0, 0.25)",
  berlinGold: "#FFB800", // Signal-Amber
  error: "#D92D20",
  shadow: "var(--color-shadow, 0 2px 4px rgba(18,18,21,0.04), 0 12px 28px -12px rgba(18,18,21,0.08))",
  blueprintGrid: "var(--blueprint-grid-color, rgba(35, 55, 232, 0.06))",
  /* Flächen, die in BEIDEN Themes dunkel bleiben (Newsticker, Datenschutz-
     Banner, BackToTop). Eigene Rollen, weil T.text/T.paper als Fläche im Dark
     Mode kippen — die Fläche wurde weiß und die helle Schrift unsichtbar. */
  ink: "var(--color-ink, #121215)",
  inkText: "var(--color-ink-text, #FFFFFF)",
  inkMuted: "var(--color-ink-muted, #9AA3B2)",
  inkAccent: "var(--color-ink-accent, #8FA0FF)",
};

export const fontDisplay = { fontFamily: "'Archivo', sans-serif" };
export const fontMono = { fontFamily: "'IBM Plex Mono', monospace" };

export const cardBase = {
  backgroundColor: T.card,
  border: `1px solid ${T.line}`,
  boxShadow: T.shadow,
};

export const blueprintCard = {
  backgroundColor: T.card,
  border: `1px solid ${T.line}`,
  boxShadow: T.shadow,
  position: "relative",
};

