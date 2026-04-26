"use client";

import { useTranslations } from "next-intl";

type LivesDisplayProps = {
  lives: number;
  maxLives?: number;
};

export function LivesDisplay({ lives, maxLives = 3 }: LivesDisplayProps) {
  const t = useTranslations("quiz");

  return (
    <div className="flex flex-col items-end">
      <span className="text-xs font-bold uppercase tracking-widest text-white mb-1">
        {t("livesLeft")}
      </span>
      <div className="flex gap-2">
        {Array.from({ length: maxLives }).map((_, i) => (
          <span
            key={i}
            className={`material-symbols-outlined text-3xl ${
              i < lives ? "text-white" : "text-white/30"
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
