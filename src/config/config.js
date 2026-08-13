/* ── KONFIGURATION (hier alles Austauschbare pflegen) ──────────── */
export const CONFIG = {
  whatsappUrl: "https://whatsapp.com/channel/0029VbBwfND4o7qDJ1Wi6N2d",
  instagram: "https://instagram.com/herotaxberlin",
  tiktok: "https://tiktok.com/@herotaxberlin",
  youtube: "https://www.youtube.com/@herotaxberlin",
  x: "https://x.com/HeroTaxBerlin",
  linkedin: "https://www.linkedin.com/in/orhankahraman/",
  /* Öffentlicher Code-Spiegel. Das Entwicklungs-Repo ist privat — der Link
     muss auf herotax-code zeigen, sonst läuft der Footer ins 404. */
  github: "https://github.com/OrhanHero/herotax-code",
  handle: "@herotaxberlin",
  impressumName: "Orhan Kahraman",
  contactEmail: "info@herotax.de",
  contactPhone: "03028603973",

  /* Plausible Analytics:
     Script gehört in die index.html:
     <script defer data-domain="herotax.de" src="https://plausible.io/js/script.js"></script>
     Events werden im Code via window.plausible?.() gefeuert.     */
  plausibleDomain: "herotax.de",
};
