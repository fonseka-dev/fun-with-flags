type LivesDisplayProps = {
  lives: number;
  maxLives?: number;
};

export function LivesDisplay({ lives, maxLives = 3 }: LivesDisplayProps) {
  return (
    <div className="flex flex-col items-end">
      <span className="text-xs font-bold uppercase tracking-widest text-error mb-1">
        Lives Left
      </span>
      <div className="flex gap-2">
        {Array.from({ length: maxLives }).map((_, i) => (
          <span
            key={i}
            className={`material-symbols-outlined text-3xl ${
              i < lives ? "text-error" : "text-outline-variant"
            }`}
            style={
              i < lives ? { fontVariationSettings: "'FILL' 1" } : undefined
            }
          >
            favorite
          </span>
        ))}
      </div>
    </div>
  );
}
