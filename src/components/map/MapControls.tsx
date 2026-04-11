type MapControlsProps = {
  onZoomIn: () => void;
  onZoomOut: () => void;
  onReset: () => void;
};

export function MapControls({ onZoomIn, onZoomOut, onReset }: MapControlsProps) {
  return (
    <div className="absolute bottom-8 right-8 flex flex-col gap-3 z-10">
      <button
        onClick={onZoomIn}
        className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-on-surface hover:bg-white transition-bounce"
        aria-label="Zoom in"
      >
        <span className="material-symbols-outlined">add</span>
      </button>
      <button
        onClick={onZoomOut}
        className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-on-surface hover:bg-white transition-bounce"
        aria-label="Zoom out"
      >
        <span className="material-symbols-outlined">remove</span>
      </button>
      <button
        onClick={onReset}
        className="w-12 h-12 bg-primary text-on-primary rounded-2xl shadow-ambient flex items-center justify-center hover:scale-110 active:scale-95 transition-bounce"
        aria-label="Reset view"
      >
        <span className="material-symbols-outlined">my_location</span>
      </button>
    </div>
  );
}
