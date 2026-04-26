"use client";

import { useTranslations } from "next-intl";

type ScoreBoardProps = {
  score: number;
};

export function ScoreBoard({ score }: ScoreBoardProps) {
  const t = useTranslations("quiz");

  return (
    <div className="flex flex-col">
      <span className="text-xs font-bold uppercase tracking-widest text-white/80 mb-1">
        {t("currentScore")}
      </span>
      <div className="flex items-center gap-2">
        <span
          className="material-symbols-outlined text-white text-4xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          military_tech
        </span>
        <span className="text-4xl font-extrabold text-white">
          {score.toLocaleString()}
        </span>
      </div>
    </div>
  );
}
