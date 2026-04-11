"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { Country } from "@/data/types";

type CountryHeroProps = {
  country: Country;
};

export function CountryHero({ country }: CountryHeroProps) {
  const t = useTranslations("country");
  return (
    <section className="relative mb-12">
      <div className="flex flex-col lg:flex-row items-end gap-8">
        {/* Flag image */}
        <div className="relative w-full lg:w-2/3 aspect-video rounded-xl overflow-hidden shadow-ambient-lg">
          <Image
            src={`https://flagcdn.com/w640/${country.flagCode}.png`}
            alt={t("flagAlt", { name: country.name })}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 1024px) 100vw, 66vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <span className="bg-white/20 backdrop-blur-md text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase">
              {t("spotlight")}
            </span>
            <h1 className="text-white text-3xl sm:text-5xl md:text-7xl font-extrabold mt-2 tracking-tighter">
              {country.name}
            </h1>
          </div>
        </div>

        {/* Stat cards */}
        <div className="w-full lg:w-1/3 flex flex-col gap-6">
          <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-[6rem]">
                location_city
              </span>
            </div>
            <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
              {t("capitalLabel")}
            </h3>
            <p className="text-4xl font-extrabold text-on-surface">
              {country.capital}
            </p>
          </div>
          <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden group">
            <div className="absolute -right-4 -top-4 opacity-5 group-hover:scale-110 transition-transform duration-500">
              <span className="material-symbols-outlined text-[6rem]">
                groups
              </span>
            </div>
            <h3 className="text-xs font-bold text-primary uppercase tracking-widest mb-2">
              {t("populationLabel")}
            </h3>
            <p className="text-4xl font-extrabold text-on-surface">
              {country.population}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
