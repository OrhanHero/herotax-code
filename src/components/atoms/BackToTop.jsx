import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
import { T } from "../../config/tokens";

/** Floating Button — erscheint nach dem Scrollen, springt sanft nach oben */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 480);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Nach oben"
      className="fixed bottom-6 right-5 sm:right-8 z-40 w-11 h-11 rounded-full flex items-center justify-center transition-transform duration-200 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2"
      style={{ backgroundColor: T.ink, color: T.inkText, boxShadow: T.shadow }}
    >
      <ArrowUp size={19} />
    </button>
  );
};

export default BackToTop;
