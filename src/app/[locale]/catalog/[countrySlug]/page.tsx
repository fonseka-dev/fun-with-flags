import { getCountryBySlug, getCountrySlugs } from "@/lib/utils/countries";
import { CountryDetailHeader } from "@/components/country/CountryDetailHeader";
import { CountryDetailContent } from "@/components/country/CountryDetailContent";

// Allow Firestore-only slugs (countries not in the static list) to be rendered dynamically
export const dynamicParams = true;

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
  if (!country) return { title: "Country — Explorer's Atlas" };
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

  return (
    <div className="min-h-screen bg-surface">
      <CountryDetailHeader />
      <CountryDetailContent slug={countrySlug} />
    </div>
  );
}
