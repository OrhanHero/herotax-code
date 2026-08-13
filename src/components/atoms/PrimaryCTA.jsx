import { ArrowRight } from "lucide-react";
import { useLang } from "../../i18n";
import { CONFIG } from "../../config/config";
import { T, fontDisplay } from "../../config/tokens";
import WhatsAppGlyph from "./WhatsAppGlyph";

const PrimaryCTA = ({ large = false }) => {
  const { t } = useLang();
  return (
    <a
      href={CONFIG.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-3 rounded-full font-bold transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus-visible:ring-4 w-full sm:w-auto ${
        large ? "px-9 py-5 text-lg" : "px-7 py-4 text-base"
      }`}
      style={{
        ...fontDisplay,
        backgroundColor: T.blue,
        color: T.blueInk,
        boxShadow: "0 12px 32px -8px rgba(35,55,232,0.45)",
      }}
    >
      <WhatsAppGlyph size={large ? 22 : 19} />
      {t("cta.join")}
      <ArrowRight size={18} className="transition-transform duration-200 group-hover:translate-x-1 rtl:rotate-180" />
    </a>
  );
};

export default PrimaryCTA;
