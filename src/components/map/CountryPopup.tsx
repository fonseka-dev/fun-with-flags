"use client";

import { useEffect } from "react";
import { Html } from "@react-three/drei";
import type { FunFact } from "@/data/types";

const CONTINENT_DOT_COLORS: Record<string, string> = {
  Africa: "#4CAF50",
  Asia: "#FF6B6B",
  Europe: "#5C6BC0",
  "North America": "#FFB74D",
  "South America": "#26A69A",
  Oceania: "#AB47BC",
};

type CountryPopupProps = {
  slug: string;
  flagCode: string;
  name: string;
  capital: string;
  continent: string;
  funFact: FunFact | null;
  centroid: [number, number, number];
  locale: string;
  capitalLabel: string;
  exploreLabel: string;
  markExploredLabel: string;
  alreadyExploredLabel: string;
  isDiscovered: boolean;
  onMarkExplored: (slug: string) => void;
  onClose: () => void;
};

export function CountryPopup({
  slug,
  flagCode,
  name,
  capital,
  continent,
  funFact,
  centroid,
  locale,
  capitalLabel,
  exploreLabel,
  markExploredLabel,
  alreadyExploredLabel,
  isDiscovered,
  onMarkExplored,
  onClose,
}: CountryPopupProps) {

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [onClose]);

  return (
    <Html position={centroid} center>
      <div
        onClick={(e) => e.stopPropagation()}
        className="min-w-[240px] max-w-[280px] rounded-2xl border border-white/10 bg-black/60 p-4 text-white shadow-2xl backdrop-blur-xl"
      >
        {/* Header: flag + name + close */}
        <div className="mb-3 flex items-center gap-3">
          <img
            src={`https://flagcdn.com/w160/${flagCode}.png`}
            alt={name}
            className="h-12 w-12 rounded-lg object-cover"
          />
          <span className="flex-1 text-lg font-bold leading-tight">
            {name}
          </span>
          <button
            onClick={onClose}
            className="flex h-6 w-6 items-center justify-center rounded-full text-white/50 transition-colors hover:bg-white/10 hover:text-white"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
        </div>

        {/* Capital */}
        <div className="mb-2">
          <span className="text-xs text-white/50">{capitalLabel}</span>
          <p className="text-sm">{capital}</p>
        </div>

        {/* Continent badge */}
        <div className="mb-2 flex items-center gap-1.5">
          <span
            className="inline-block h-2 w-2 rounded-full"
            style={{
              backgroundColor: CONTINENT_DOT_COLORS[continent] ?? "#888",
            }}
          />
          <span className="text-xs text-white/70">{continent}</span>
        </div>

        {/* Fun fact */}
        {funFact && (
          <div className="mb-2 flex items-start gap-2">
            <span className="material-symbols-outlined mt-0.5 text-sm text-white/50">
              {funFact.icon}
            </span>
            <p className="text-xs text-white/70">{funFact.description}</p>
          </div>
        )}

        {/* Mark as Explored */}
        <button
          onClick={() => !isDiscovered && onMarkExplored(slug)}
          disabled={isDiscovered}
          className={`mt-3 block w-full rounded-xl py-2 text-center text-sm font-medium transition-colors ${
            isDiscovered
              ? "cursor-default bg-emerald-500/20 text-emerald-400"
              : "bg-emerald-500/80 text-white hover:bg-emerald-400/80"
          }`}
        >
          {isDiscovered ? (
            <span className="flex items-center justify-center gap-1.5">
              <span className="material-symbols-outlined text-sm">check_circle</span>
              {alreadyExploredLabel}
            </span>
          ) : (
            markExploredLabel
          )}
        </button>

        {/* Explore link */}
        <a
          href={`/${locale}/catalog/${slug}?from=map`}
          className="mt-3 block w-full rounded-xl bg-white/10 py-2 text-center text-sm font-medium transition-colors hover:bg-white/20"
        >
          {exploreLabel}
        </a>
      </div>
    </Html>
  );
}
