"use client";

import { notFound } from "next/navigation";
import { useCountries } from "@/lib/providers/CountriesProvider";
import { CountryHero } from "@/components/country/CountryHero";
import { FlagMeaning } from "@/components/country/FlagMeaning";
import { FunFacts } from "@/components/country/FunFacts";
import { RegionalContext } from "@/components/country/RegionalContext";
import { DiscoverTracker } from "@/components/country/DiscoverTracker";

export function CountryDetailContent({ slug }: { slug: string }) {
  const { countries } = useCountries();

  const country = countries.find((c) => c.slug === slug);

  if (!country) {
    notFound();
  }

  return (
    <main className="max-w-screen-xl mx-auto px-6 pt-12 pb-32">
      <DiscoverTracker slug={country.slug} />
      <CountryHero country={country} />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
        <div className="md:col-span-7 space-y-12">
          <FlagMeaning description={country.flagDescription} />
          <FunFacts facts={country.funFacts} />
        </div>
        <aside className="md:col-span-5">
          <div className="sticky top-24 space-y-8">
            <RegionalContext country={country} />
          </div>
        </aside>
      </div>
    </main>
  );
}
