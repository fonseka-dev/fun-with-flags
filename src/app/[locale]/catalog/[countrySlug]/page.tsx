import { Suspense } from "react";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { getCountrySlugs } from "@/lib/utils/countries";
import { countriesData } from "@/data/countries";
import { publicMetadata } from "@/lib/seo";
import { CountryDetailHeader } from "@/components/country/CountryDetailHeader";
import { CountryDetailContent } from "@/components/country/CountryDetailContent";
import { BottomNav } from "@/components/layout/BottomNav";

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
  const entry = countriesData.find((country) => country.slug === countrySlug);
  if (!entry) notFound();
  const country = entry.translations[locale as "en" | "es"];
  const title = locale === "es" ? "Atlas del Explorador" : "Explorer's Atlas";
  return publicMetadata(locale as "en" | "es", `/catalog/${countrySlug}`, {
    title: `${country.name} — ${title}`,
    description:
      locale === "es"
        ? `Descubre ${country.name}: su bandera, su capital (${country.capital}) y datos culturales.`
        : `Explore ${country.name}: its flag, capital (${country.capital}), and cultural facts.`,
  });
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
      {/* Mobile main menu — this route renders outside AppShell too */}
      <BottomNav />
    </div>
  );
}
