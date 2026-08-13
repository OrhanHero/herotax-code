import { Mail } from "lucide-react";
import { useLang } from "../../i18n";
import { CONFIG } from "../../config/config";
import { T, fontDisplay, fontMono } from "../../config/tokens";
import WhatsAppGlyph from "../atoms/WhatsAppGlyph";
import TikTokGlyph from "../atoms/TikTokGlyph";
import InstagramGlyph from "../atoms/InstagramGlyph";
import YouTubeGlyph from "../atoms/YouTubeGlyph";
import XGlyph from "../atoms/XGlyph";
import LinkedInGlyph from "../atoms/LinkedInGlyph";
import GithubGlyph from "../atoms/GithubGlyph";
import AILabel from "../atoms/AILabel";

/** Footer mit Impressum */
const Footer = () => {
  const { t } = useLang();
  return (
    <footer style={{ backgroundColor: T.card, borderTop: `1px solid ${T.line}` }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm" style={{ ...fontDisplay }}>
            <a href="/" className="font-bold hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 rounded flex items-center gap-2" style={{ color: T.text }}>
              <img src="/images/berlin_moonlight_skyline.png" alt="HERO Tax Logo - Berlin Moonlight Skyline" className="h-7 w-7 rounded-md object-cover border border-slate-300/80 shadow-xs" />
              <span>HERO</span> <span style={{ color: T.blue }}>Tax</span>
            </a>
            <span className="font-normal" style={{ color: T.faint }}>{t("footer.made")}</span>
            <a
              href={CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-normal hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 rounded"
              style={{ color: T.faint }}
            >
              <span className="inline-flex" style={{ color: T.text }}>
                <GithubGlyph size={13} />
              </span>
              GitHub
            </a>
            <span className="font-normal" style={{ color: T.faint }}>— Nichts zu verstecken — auch nicht im Code.</span>
          </div>
          <div className="flex items-center gap-5" aria-label="Social Media">
            <a href={CONFIG.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:opacity-70" style={{ color: T.muted }}>
              <InstagramGlyph size={18} />
            </a>
            <a href={CONFIG.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="hover:opacity-70" style={{ color: T.muted }}>
              <TikTokGlyph size={17} />
            </a>
            <a href={CONFIG.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:opacity-70" style={{ color: T.muted }}>
              <YouTubeGlyph size={18} />
            </a>
            <a href={CONFIG.x} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="hover:opacity-70" style={{ color: T.muted }}>
              <XGlyph size={16} />
            </a>
            <a href={CONFIG.whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Channel" className="hover:opacity-70" style={{ color: T.muted }}>
              <WhatsAppGlyph size={17} />
            </a>
          </div>
        </div>

        {/* Impressum & Kontakt — fest integriert */}
        <div
          className="rounded-2xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm"
          style={{ backgroundColor: T.wash, border: `1px solid ${T.lineSoft}` }}
        >
          <p style={{ color: T.muted }}>
            <a
              href="/impressum"
              className="font-semibold hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 rounded"
              style={{ color: T.text }}
            >
              {t("footer.imprint")}
            </a>{" "}
            <a
              href={CONFIG.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 rounded"
              style={{ color: T.muted }}
            >
              {CONFIG.impressumName}
              <LinkedInGlyph size={14} />
            </a>
          </p>
          <a
            href={`mailto:${CONFIG.contactEmail}`}
            className="inline-flex items-center gap-2 transition-colors hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 rounded"
            style={{ color: T.blue }}
          >
            <Mail size={15} />
            {CONFIG.contactEmail}
          </a>
          <nav className="flex gap-6" aria-label="Rechtliches">
            <a href="/datenschutz" className="hover:underline underline-offset-4" style={{ color: T.muted }}>{t("footer.privacy")}</a>
          </nav>
        </div>

        <p className="text-center text-xs mt-8 uppercase tracking-widest" style={{ ...fontMono, color: T.faint }}>
          {t("footer.legal")}
        </p>

        <div className="mt-8 max-w-4xl mx-auto">
          <AILabel />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
