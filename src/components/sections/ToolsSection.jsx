import { useLang } from "../../i18n";
import { T, fontDisplay, fontMono } from "../../config/tokens";
import Eyebrow from "../atoms/Eyebrow";
import UStRechner from "../tools/UStRechner";
import FristenCheck from "../tools/FristenCheck";
import GuideTool from "../tools/GuideTool";
import ERechnungCheckTool from "../tools/ERechnungCheckTool";

/** Säule 04 · HERO-Tools (Zero-Friction) */
const ToolsSection = () => {
  const { t } = useLang();
  return (
    <section
      className="py-24 bg-blueprint-grid"
      style={{ borderTop: `1px solid ${T.lineSoft}`, borderBottom: `1px solid ${T.lineSoft}` }}
      id="tools"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <Eyebrow index="04">{t("tools.eyebrow")}</Eyebrow>
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight" style={{ ...fontDisplay, color: T.text }}>
            {t("tools.t1")}
            <span className="px-3 rounded-xl inline-block" style={{ backgroundColor: T.blue, color: T.blueInk }}>
              {t("tools.hl")}
            </span>
          </h2>
          <p className="text-sm max-w-xs" style={{ color: T.muted }}>
            {t("tools.sub")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 items-stretch">
          <UStRechner />
          <FristenCheck />
          <GuideTool />
          <ERechnungCheckTool />
        </div>

        <p className="mt-6 text-xs text-center" style={{ ...fontMono, color: T.faint }}>
          {t("tools.note")}
        </p>
      </div>
    </section>
  );
};

export default ToolsSection;
