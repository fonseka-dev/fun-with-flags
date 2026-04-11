import { notFound } from "next/navigation";
import Link from "next/link";
import { getCountryBySlug, getCountrySlugs } from "@/lib/utils/countries";
import { CountryHero } from "@/components/country/CountryHero";
import { FlagMeaning } from "@/components/country/FlagMeaning";
import { FunFacts } from "@/components/country/FunFacts";
import { RegionalContext } from "@/components/country/RegionalContext";

export function generateStaticParams() {
  return getCountrySlugs().map((slug) => ({ countrySlug: slug }));
}

export function generateMetadata({
  params,
}: {
  params: { countrySlug: string };
}) {
  const country = getCountryBySlug(params.countrySlug);
  if (!country) return { title: "Country Not Found" };
  return {
    title: `${country.name} — Explorer's Atlas`,
    description: `Learn about ${country.name}: its flag, capital ${country.capital}, and fun cultural facts.`,
  };
}

export default function CountryDetailPage({
  params,
}: {
  params: { countrySlug: string };
}) {
  const country = getCountryBySlug(params.countrySlug);

  if (!country) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-surface">
      {/* Simplified TopNav for detail page */}
      <header className="glass sticky top-0 z-40">
        <div className="flex items-center gap-6 px-8 py-4 max-w-screen-xl mx-auto">
          <Link
            href="/catalog"
            className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-bounce group"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            <span className="font-bold">Back to Catalog</span>
          </Link>
          <span className="text-2xl font-extrabold text-primary tracking-tight">
            Explorer&apos;s Atlas
          </span>
        </div>
      </header>

      <main className="max-w-screen-xl mx-auto px-6 pt-12 pb-32">
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
