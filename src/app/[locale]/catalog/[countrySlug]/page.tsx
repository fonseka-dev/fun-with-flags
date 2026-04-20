import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { getCountryBySlug, getCountrySlugs } from "@/lib/utils/countries";
import { CountryDetailHeader } from "@/components/country/CountryDetailHeader";
import { CountryDetailContent } from "@/components/country/CountryDetailContent";

export const dynamicParams = false;

export function generateStaticParams() {
  return getCountrySlugs().map((slug) => ({ countrySlug: slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; countrySlug: string }>;
}) {
  const { locale, countrySlug } = await params;
  setRequestLocale(locale);
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
  params: Promise<{ locale: string; countrySlug: string }>;
}) {
  const { locale, countrySlug } = await params;
  setRequestLocale(locale);

  return (
    <div className="min-h-screen bg-surface">
      <Suspense fallback={null}>
        <CountryDetailHeader />
      </Suspense>
      <CountryDetailContent slug={countrySlug} />
    </div>
  );
}
