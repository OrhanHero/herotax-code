import { useEffect } from "react";
import { T, fontMono } from "../../config/tokens";
import SocialWall from "../sections/SocialWall";

export default function LivePage() {
  useEffect(() => {
    document.title = "HERO Live · Daily Tax Hacks & Social Feed · HERO Tax";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen pb-16">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 pt-8 pb-4">
        <a
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-semibold hover:underline underline-offset-4"
          style={{ ...fontMono, color: T.blue }}
        >
          ← Zurück zur Startseite
        </a>
      </div>
      <SocialWall />
    </div>
  );
}
