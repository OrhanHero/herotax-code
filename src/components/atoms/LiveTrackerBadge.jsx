import { useState, useEffect, useCallback } from "react";
import { RefreshCw } from "lucide-react";
import { T, fontMono } from "../../config/tokens";
import { getTrackerStatusText, clearCache, getArticles } from "../../services/articleService";

/**
 * LiveTrackerBadge
 * Displays live tracking status and last-updated timestamp:
 * "Live · Stand: 13.08.2026, 09:14 Uhr (alle 4 Std.)"
 * Auto-refreshes on a 4-hour interval or manually via button.
 *
 * Der Anfangswert kommt direkt aus dem Cache-Zeitstempel, nicht aus einem
 * fest verdrahteten Datum — sonst zeigt der erste Frame einen Stand, der
 * mit dem Build altert.
 */
const LiveTrackerBadge = ({ type = "general", onRefresh, variant = "default" }) => {
  const [statusText, setStatusText] = useState(() => getTrackerStatusText(type));
  const [isRefreshing, setIsRefreshing] = useState(false);

  const updateStatus = useCallback(() => {
    setStatusText(getTrackerStatusText(type));
  }, [type]);

  useEffect(() => {
    updateStatus();

    // Automatischer Live-Check alle 60 Sekunden (aktualisiert Relativzeit & prüft 4-Std-Intervall)
    const interval = setInterval(() => {
      updateStatus();
    }, 60000);

    return () => clearInterval(interval);
  }, [updateStatus]);

  const handleManualRefresh = async () => {
    if (isRefreshing) return;
    setIsRefreshing(true);
    clearCache();
    await getArticles(type);
    updateStatus();
    if (onRefresh) {
      await onRefresh();
    }
    setTimeout(() => {
      setIsRefreshing(false);
    }, 600);
  };

  if (variant === "compact") {
    return (
      <div className="inline-flex items-center gap-2 text-xs" style={{ ...fontMono, color: T.muted }}>
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#10B981" }} />
          <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: "#10B981" }} />
        </span>
        <span>{statusText || "Live · Stand: --.--.----, --:-- Uhr (alle 4 Std.)"}</span>
        <button
          onClick={handleManualRefresh}
          title="Jetzt live aktualisieren"
          className="p-1 rounded-md transition-transform duration-300 hover:scale-110 focus:outline-none"
          style={{ color: T.muted }}
        >
          <RefreshCw size={11} className={isRefreshing ? "animate-spin" : ""} />
        </button>
      </div>
    );
  }

  return (
    <div
      className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-xs transition-all duration-200 max-w-full overflow-hidden"
      style={{
        ...fontMono,
        backgroundColor: T.wash,
        border: `1px solid ${T.line}`,
        color: T.text,
      }}
    >
      <span className="relative flex h-2.5 w-2.5 shrink-0">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: "#10B981" }} />
        <span className="relative inline-flex rounded-full h-2.5 w-2.5" style={{ backgroundColor: "#10B981" }} />
      </span>
      
      <span className="truncate max-w-[190px] sm:max-w-none">
        {statusText || "Live · Stand: --.--.----, --:-- Uhr (alle 4 Std.)"}
      </span>

      <button
        onClick={handleManualRefresh}
        disabled={isRefreshing}
        title="Nachrichten jetzt manuell aktualisieren"
        aria-label="Nachrichten jetzt manuell aktualisieren"
        className="ml-0.5 p-1 rounded-full hover:bg-black/5 transition-transform duration-300 active:scale-95 focus:outline-none"
        style={{ color: T.blue }}
      >
        <RefreshCw size={12} className={isRefreshing ? "animate-spin" : ""} />
      </button>
    </div>
  );
};

export default LiveTrackerBadge;
