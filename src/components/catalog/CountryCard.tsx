"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Country } from "@/data/types";
import { Button } from "@/components/ui/Button";

type CountryCardProps = {
  country: Country;
};

export function CountryCard({ country }: CountryCardProps) {
  const t = useTranslations("catalog");

  return (
    <div className="group bg-surface-container-low rounded-xl overflow-hidden hover:scale-[1.02] transition-bounce shadow-ambient flex flex-col">
      <div className="relative h-48 overflow-hidden bg-surface-container-highest">
        <Image
          src={`https://flagcdn.com/w320/${country.flagCode}.png`}
          alt={`Flag of ${country.name}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-2xl font-extrabold text-on-surface tracking-tight">
              {country.name}
            </h3>
            <p className="text-secondary font-bold text-sm">
              {country.continent}
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex justify-between items-center text-sm">
            <span className="text-on-surface-variant font-medium">
              {t("capitalLabel")}
            </span>
            <span className="text-on-surface font-bold">{country.capital}</span>
          </div>
          <div className="flex justify-between items-center text-sm">
            <span className="text-on-surface-variant font-medium">
              {t("populationLabel")}
            </span>
            <span className="text-on-surface font-bold">
              {country.population}
            </span>
          </div>
        </div>
        <Link href={`/catalog/${country.slug}`} className="mt-auto">
          <Button variant="primary" fullWidth>
            {t("exploreCulture")}
          </Button>
        </Link>
      </div>
    </div>
  );
}
