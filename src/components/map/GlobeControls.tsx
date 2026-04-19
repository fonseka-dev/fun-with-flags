type GlobeControlsProps = {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
  showLabels: boolean;
  onToggleLabels: () => void;
};

export function GlobeControls({
  onZoomIn,
  onZoomOut,
  onReset,
  showLabels,
  onToggleLabels,
}: GlobeControlsProps) {
  const btnBase =
    "w-12 h-12 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl flex items-center justify-center text-white/80 hover:bg-white/20 hover:text-white transition-all duration-200";

  return (
    <div className="absolute bottom-8 right-8 z-10 flex flex-col gap-3">
      <button onClick={onZoomIn} className={btnBase} aria-label="Zoom in">
        <span className="material-symbols-outlined">add</span>
      </button>
      <button onClick={onZoomOut} className={btnBase} aria-label="Zoom out">
        <span className="material-symbols-outlined">remove</span>
      </button>
      <button
        onClick={onToggleLabels}
        className={btnBase}
        aria-label={showLabels ? "Hide labels" : "Show labels"}
      >
        <span className="material-symbols-outlined">
          {showLabels ? "label_off" : "label"}
        </span>
      </button>
      <button
        onClick={onReset}
        className="w-12 h-12 bg-indigo-500/80 text-white rounded-2xl shadow-lg flex items-center justify-center hover:bg-indigo-400/80 hover:scale-110 active:scale-95 transition-all duration-200"
        aria-label="Reset view"
      >
        <span className="material-symbols-outlined">my_location</span>
      </button>
    </div>
  );
}
