import { useTranslations } from "next-intl";
import { Country } from "@/data/types";
import { CountryCard } from "./CountryCard";

type CountryGridProps = {
  countries: Country[];
};

export function CountryGrid({ countries }: CountryGridProps) {
  const t = useTranslations("catalog");
  if (countries.length === 0) {
    return (
      <div className="text-center py-16">
        <span className="material-symbols-outlined text-6xl text-outline-variant mb-4 block">
          search_off
        </span>
        <p className="text-on-surface-variant text-lg font-semibold">
          {t("empty")}
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8">
      {countries.map((country) => (
        <CountryCard key={country.slug} country={country} />
      ))}
    </div>
  );
}
