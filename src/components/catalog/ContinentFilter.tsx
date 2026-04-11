"use client";

import { useTranslations } from "next-intl";
import { Continent } from "@/data/types";
import { continents } from "@/data/continents";

type ContinentFilterProps = {
  active: Continent | null;
  onSelect: (continent: Continent | null) => void;
};

export function ContinentFilter({ active, onSelect }: ContinentFilterProps) {
  const t = useTranslations("continents");

  return (
    <nav className="flex flex-col gap-1">
      {continents.map((c) => {
        const isActive = active === c.name;
        return (
          <button
            key={c.name}
            onClick={() => onSelect(isActive ? null : c.name)}
            className={`
              flex items-center gap-3 mx-4 px-4 py-3 rounded-full font-semibold
              transition-all duration-300
              ${
                isActive
                  ? "bg-secondary-container text-on-secondary-container font-bold"
                  : "text-on-surface-variant hover:bg-surface-container-low"
              }
            `}
          >
            <span className="material-symbols-outlined">{c.icon}</span>
            {t(c.name)}
          </button>
        );
      })}
    </nav>
  );
}
