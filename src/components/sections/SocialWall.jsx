import { useLang } from "../../i18n";
import { CONFIG } from "../../config/config";
import { T, fontDisplay, fontMono, cardBase } from "../../config/tokens";
import { SOCIAL_POSTS } from "../../data/social";
import Eyebrow from "../atoms/Eyebrow";
import TikTokGlyph from "../atoms/TikTokGlyph";
import InstagramGlyph from "../atoms/InstagramGlyph";
import YouTubeGlyph from "../atoms/YouTubeGlyph";
import XGlyph from "../atoms/XGlyph";

/** Säule 05 · Social Wall */
const SocialWall = () => {
  const { t } = useLang();
  return (
    <section className="py-24" id="live">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Eyebrow index="05">{t("live.eyebrow")}</Eyebrow>
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight" style={{ ...fontDisplay, color: T.text }}>
            {t("live.t1")}
            <span className="px-3 rounded-xl inline-block" style={{ backgroundColor: T.blue, color: T.blueInk }}>
              {t("live.hl")}
            </span>
          </h2>
          <div className="flex gap-3">
            {[
              { href: CONFIG.instagram, icon: <span style={{ color: T.blue }}><InstagramGlyph size={17} /></span>, label: "Instagram" },
              { href: CONFIG.tiktok, icon: <TikTokGlyph size={16} />, label: "TikTok" },
              { href: CONFIG.youtube, icon: <YouTubeGlyph size={17} />, label: "YouTube" },
              { href: CONFIG.x, icon: <XGlyph size={15} />, label: "X" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2"
                style={{ ...fontDisplay, color: T.text, ...cardBase }}
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </div>

        {/* Feed-Platzhalter: hier docken echte Embeds/API-Feeds an */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SOCIAL_POSTS.map((p) => (
            <a
              key={p.hook}
              href={p.platform === "tiktok" ? CONFIG.tiktok : CONFIG.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl p-6 flex flex-col justify-between aspect-square transition-all duration-300 hover:-translate-y-1 focus:outline-none focus-visible:ring-2"
              style={cardBase}
              aria-label={`${p.platform === "tiktok" ? "TikTok" : "Instagram"}: ${p.hook}`}
            >
              <span className="inline-flex items-center gap-2 text-xs" style={{ ...fontMono, color: T.muted }}>
                {p.platform === "tiktok" ? <TikTokGlyph size={14} /> : <InstagramGlyph size={14} />}
                {CONFIG.handle}
              </span>
              <div>
                <p className="font-bold leading-snug mb-3" style={{ ...fontDisplay, color: T.text }}>
                  {p.hook}
                </p>
                <span className="text-xs" style={{ ...fontMono, color: T.faint }}>
                  {p.meta}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialWall;
