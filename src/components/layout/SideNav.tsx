"use client";

import { useTranslations } from "next-intl";
import { Continent } from "@/data/types";
import { ContinentFilter } from "@/components/catalog/ContinentFilter";
import { Button } from "@/components/ui/Button";
import { Link } from "@/i18n/navigation";

type SideNavProps = {
  activeContinent: Continent | null;
  onSelectContinent: (continent: Continent | null) => void;
};

export function SideNav({
  activeContinent,
  onSelectContinent,
}: SideNavProps) {
  const t = useTranslations("sidebar");

  return (
    <aside className="hidden lg:flex flex-col w-72 py-8 gap-2 bg-surface-container-lowest shadow-ambient rounded-xl overflow-y-auto my-4">
      <div className="px-8 mb-6">
        <h2 className="text-xl font-bold text-primary">{t("title")}</h2>
        <p className="text-on-surface-variant text-sm font-semibold">
          {t("subtitle")}
        </p>
      </div>

      <ContinentFilter active={activeContinent} onSelect={onSelectContinent} />

      <div className="mt-auto px-6 pb-8">
        <Link href="/games/guess-the-flag" className="group/cta">
          <Button variant="tertiary" fullWidth>
            <span className="flex items-center justify-center gap-2">
              <span className="material-symbols-outlined transition-transform duration-150 group-hover/cta:scale-110">auto_awesome</span>
              {t("dailyChallenge")}
            </span>
          </Button>
        </Link>
      </div>
    </aside>
  );
}
