import { notFound } from "next/navigation";
import { getCountryBySlug, getCountrySlugs } from "@/lib/utils/countries";
import { CountryHero } from "@/components/country/CountryHero";
import { FlagMeaning } from "@/components/country/FlagMeaning";
import { FunFacts } from "@/components/country/FunFacts";
import { RegionalContext } from "@/components/country/RegionalContext";
import { DiscoverTracker } from "@/components/country/DiscoverTracker";
import { CountryDetailHeader } from "@/components/country/CountryDetailHeader";

export function generateStaticParams() {
  return getCountrySlugs().map((slug) => ({ countrySlug: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ countrySlug: string }>;
}) {
  const { countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);
  if (!country) return { title: "Country Not Found" };
  return {
    title: `${country.name} — Explorer's Atlas`,
    description: `Learn about ${country.name}: its flag, capital ${country.capital}, and fun cultural facts.`,
  };
}

export default async function CountryDetailPage({
  params,
}: {
  params: Promise<{ countrySlug: string }>;
}) {
  const { countrySlug } = await params;
  const country = getCountryBySlug(countrySlug);

  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-surface">
      <CountryDetailHeader />

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
    </div>
  );
}
