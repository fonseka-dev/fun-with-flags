"use client";

import Image from "next/image";
import { avatarUrl } from "@/data/types";

export const AVATAR_SEEDS = [
  "explorer",
  "captain",
  "navigator",
  "pioneer",
  "voyager",
  "scout",
  "ranger",
  "pathfinder",
  "discoverer",
  "traveler",
  "adventurer",
  "wanderer",
] as const;

type Props = {
  selected: string;
  onSelect: (seed: string) => void;
};

export function AvatarPicker({ selected, onSelect }: Props) {
  return (
    <div className="grid grid-cols-4 gap-3">
      {AVATAR_SEEDS.map((seed) => {
        const isSelected = seed === selected;
        return (
          <button
            key={seed}
            type="button"
            aria-label={`Avatar ${seed}`}
            aria-pressed={isSelected}
            onClick={() => onSelect(seed)}
            className={[
              "relative rounded-full overflow-hidden cursor-pointer transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary",
              isSelected ? "ring-4 ring-primary" : "ring-2 ring-transparent",
            ].join(" ")}
          >
            <Image
              src={avatarUrl(seed)}
              alt={seed}
              width={64}
              height={64}
              className="w-full h-full object-cover bg-surface-variant"
              unoptimized
            />
            {isSelected && (
              <span className="absolute bottom-0 right-0 w-5 h-5 bg-secondary rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-[12px]">
                  check
                </span>
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}
