"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { Country } from "@/data/types";

type CountryCardProps = {
  country: Country;
};

export function CountryCard({ country }: CountryCardProps) {
  const t = useTranslations("catalog");
  const tCountry = useTranslations("country");
  const tContinents = useTranslations("continents");

  return (
    <Link
      href={`/catalog/${country.slug}`}
      className="group bg-surface-container-low rounded-xl overflow-hidden hover:shadow-ambient-lg transition-[box-shadow,transform] duration-200 shadow-ambient flex flex-col focus-visible:outline-4 focus-visible:outline-offset-2 focus-visible:outline-white"
    >
      <div className="relative h-48 overflow-hidden bg-surface-container-highest">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://flagcdn.com/w640/${country.flagCode}.png`}
          srcSet={[
            `https://flagcdn.com/w320/${country.flagCode}.png 320w`,
            `https://flagcdn.com/w640/${country.flagCode}.png 640w`,
            `https://flagcdn.com/w1280/${country.flagCode}.png 1280w`,
          ].join(", ")}
          alt={tCountry("flagAlt", { name: country.name })}
          width={640}
          height={480}
          className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          loading="lazy"
        />
      </div>
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex justify-between items-start mb-4">
          <div className="min-w-0">
            <h3 className="text-2xl font-extrabold text-on-surface tracking-tight break-words">
              {country.name}
            </h3>
            <p className="text-secondary font-bold text-sm">
              {tContinents(country.continent)}
            </p>
          </div>
        </div>
        <div className="space-y-3 mb-6">
          <div className="flex flex-wrap justify-between items-baseline gap-x-3 text-sm">
            <span className="text-on-surface-variant font-medium">
              {t("capitalLabel")}
            </span>
            <span className="text-on-surface font-bold break-words text-right">{country.capital}</span>
          </div>
          <div className="flex flex-wrap justify-between items-baseline gap-x-3 text-sm">
            <span className="text-on-surface-variant font-medium">
              {t("populationLabel")}
            </span>
            <span className="text-on-surface font-bold">
              {country.population}
            </span>
          </div>
        </div>
        <div className="mt-auto">
          <span className="block w-full rounded-full gradient-primary px-6 py-4 text-center font-bold text-on-primary group-hover:brightness-110">
            {t("exploreCulture")}
          </span>
        </div>
      </div>
    </Link>
  );
}
