import { useTranslations } from "next-intl";

type GlobeControlsProps = {
  onReset: () => void;
  showLabels: boolean;
  onToggleLabels: () => void;
  autoRotate: boolean;
  onToggleRotate: () => void;
  isDaylight: boolean;
  onToggleDaylight: () => void;
  globeMode: "realistic" | "political";
  onToggleMode: () => void;
  hoverMode: boolean;
  onToggleHoverMode: () => void;
  onGeolocate: () => void;
  geolocating: boolean;
};

export function GlobeControls({
  onReset,
  showLabels,
  onToggleLabels,
  autoRotate,
  onToggleRotate,
  isDaylight,
  onToggleDaylight,
  globeMode,
  onToggleMode,
  hoverMode,
  onToggleHoverMode,
  onGeolocate,
  geolocating,
}: GlobeControlsProps) {
  const t = useTranslations("globe");
  const btnBase =
    "w-12 h-12 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all duration-200";

  return (
    <div className="absolute bottom-8 right-8 z-10 flex flex-col gap-3">
      <button
        onClick={onToggleMode}
        className={btnBase}
        aria-label={globeMode === "realistic" ? t("politicalMode") : t("realisticMode")}
      >
        <span className="material-symbols-outlined">
          {globeMode === "realistic" ? "map" : "satellite_alt"}
        </span>
      </button>
      <button
        onClick={onToggleDaylight}
        className={btnBase}
        aria-label={isDaylight ? t("disableDaylight") : t("enableDaylight")}
      >
        <span className="material-symbols-outlined">
          {isDaylight ? "nights_stay" : "wb_sunny"}
        </span>
      </button>
      <button
        onClick={onToggleRotate}
        className={btnBase}
        aria-label={autoRotate ? t("pauseRotation") : t("resumeRotation")}
      >
        <span className="material-symbols-outlined">
          {autoRotate ? "pause_circle" : "play_circle"}
        </span>
      </button>
      <button
        onClick={onToggleHoverMode}
        className={btnBase}
        aria-label={hoverMode ? t("disableHoverPreview") : t("enableHoverPreview")}
      >
        <span className="material-symbols-outlined">
          {hoverMode ? "mouse" : "touch_app"}
        </span>
      </button>
      <button
        onClick={onToggleLabels}
        className={btnBase}
        aria-label={showLabels ? t("hideLabels") : t("showLabels")}
      >
        <span className="material-symbols-outlined">
          {showLabels ? "label_off" : "label"}
        </span>
      </button>
      <button
        onClick={onReset}
        className={btnBase}
        aria-label={t("reset")}
      >
        <span className="material-symbols-outlined">refresh</span>
      </button>
      <button
        onClick={onGeolocate}
        disabled={geolocating}
        className={`w-12 h-12 bg-indigo-500/80 text-white rounded-2xl shadow-lg flex items-center justify-center hover:bg-indigo-400/80 hover:scale-110 active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed${geolocating ? " animate-pulse" : ""}`}
        aria-label={t("geolocate")}
      >
        <span className="material-symbols-outlined">my_location</span>
      </button>
    </div>
  );
}
