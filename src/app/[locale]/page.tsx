"use client";

import { useMemo, Suspense } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link, useRouter } from "@/i18n/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { Continent } from "@/data/types";
import { useCountries } from "@/lib/providers/CountriesProvider";
import { useAuth } from "@/lib/providers/AuthProvider";
import { MiniMap } from "@/components/map/MiniMap";

// Computed once at module load — stable within a session, changes on next page load each day
const _now = Date.now();
const DAY_OF_YEAR = Math.floor(
  (_now - new Date(new Date(_now).getFullYear(), 0, 0).getTime()) / 86_400_000,
);

function DashboardContent() {
  const t = useTranslations("home");
  const { countries } = useCountries();
  const { progress, isAnonymous, nickname } = useAuth();
  const router = useRouter();

  const handleContinentSelect = (continent: Continent | null) => {
    if (continent) router.push(`/catalog?continent=${continent}`);
  };

  const totalCountries = countries.length || 1;
  const discoveredCount = progress?.discoveredCountries.length ?? 0;
  const ringCircumference = 2 * Math.PI * 52;
  const ringOffset = ringCircumference * (1 - Math.min(discoveredCount / totalCountries, 1));

  // Pick 4 countries daily — deterministic based on day-of-year (DAY_OF_YEAR computed at module load)
  const dailyCountries = useMemo(() => {
    if (countries.length === 0) return [];
    const step = Math.floor(countries.length / 4);
    return [0, 1, 2, 3].map((i) => countries[(DAY_OF_YEAR + i * step) % countries.length]);
  }, [countries]);

  return (
    <AppShell showSidebar onContinentSelect={handleContinentSelect}>
      <section className="space-y-12">
        {/* Welcome Header */}
        <header className="space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-secondary-container text-on-secondary-container rounded-full text-sm font-bold">
            <span
              className="material-symbols-outlined text-sm"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              star
            </span>
            {t("badge")}
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight text-on-background leading-none">
            {t("welcome")}
            <br />
            <span className="text-primary">
              {isAnonymous ? t("adventurer") : `${nickname}!`}
            </span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-2xl leading-[1.6]">
            {t("subtitle")}
          </p>
        </header>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Interactive Map Card */}
          <Link
            href="/map"
            className="md:col-span-8 bg-surface-container-low rounded-xl overflow-hidden group cursor-pointer shadow-ambient hover:shadow-ambient-lg transition-bounce flex flex-col"
          >
            <div className="relative flex-1 min-h-64 w-full overflow-hidden">
              <MiniMap />
              <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/50 to-transparent">
                <h3 className="text-3xl font-bold text-white mb-1">{t("mapCard.title")}</h3>
                <p className="text-white/75 text-sm">{t("mapCard.subtitle")}</p>
              </div>
            </div>
          </Link>

          {/* Journey Progress */}
          <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container rounded-xl p-8 flex flex-col justify-between shadow-ambient">
            <div>
              <h3 className="text-2xl font-bold mb-1">{t("journey.title")}</h3>
              <p className="opacity-80">{t("journey.progress", { discovered: discoveredCount, total: countries.length })}</p>
              {(progress?.quizHighScore ?? 0) > 0 && (
                <p className="text-sm opacity-70 mt-1">
                  {t("journey.highScore", { score: progress?.quizHighScore ?? 0 })}
                </p>
              )}
            </div>
            <div className="relative py-4 flex justify-center">
              <div className="relative w-32 h-32">
                <svg
                  width="128"
                  height="128"
                  viewBox="0 0 128 128"
                  className="absolute inset-0"
                >
                  <circle
                    cx="64" cy="64" r="52"
                    fill="none"
                    stroke="white"
                    strokeWidth="8"
                    opacity={0.2}
                  />
                  <circle
                    cx="64" cy="64" r="52"
                    fill="none"
                    stroke="white"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray={ringCircumference}
                    strokeDashoffset={ringOffset}
                    transform="rotate(-90 64 64)"
                    style={{ transition: "stroke-dashoffset 0.6s ease" }}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span
                    className="material-symbols-outlined text-5xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    emoji_events
                  </span>
                </div>
              </div>
            </div>
            <Link
              href="/catalog"
              className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-on-tertiary-container text-tertiary-container font-bold hover:brightness-90 transition-bounce"
            >
              <span
                className="material-symbols-outlined text-base"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                explore
              </span>
              {t("journey.viewPassport")}
            </Link>
          </div>

          {/* Explore the World */}
          <Link
            href="/catalog"
            className="md:col-span-6 bg-surface-container-highest rounded-xl p-8 group cursor-pointer relative overflow-hidden h-72 flex flex-col justify-between transition-bounce hover:scale-[1.01]"
          >
            <div className="z-10">
              <h3 className="text-3xl font-bold mb-2">{t("exploreCard.title")}</h3>
              <p className="text-on-surface-variant max-w-[200px]">
                {t("exploreCard.subtitle")}
              </p>
            </div>
            <div className="z-10 self-start">
              <span
                className="material-symbols-outlined text-primary text-6xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                auto_stories
              </span>
            </div>
            <div className="absolute bottom-0 right-0 grid grid-cols-3 gap-1.5 p-3 pointer-events-none select-none">
              {["br","in","jp","za","fr","au"].map((code) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={code}
                  src={`https://flagcdn.com/w160/${code}.png`}
                  alt=""
                  className="w-20 h-14 object-cover rounded-md shadow-md"
                />
              ))}
            </div>
          </Link>

          {/* Play & Learn */}
          <Link
            href="/games/guess-the-flag"
            className="md:col-span-6 bg-secondary-container rounded-xl p-8 group cursor-pointer relative overflow-hidden h-72 flex flex-col justify-between transition-bounce hover:scale-[1.01]"
          >
            <div className="z-10">
              <h3 className="text-3xl font-bold mb-2">{t("playCard.title")}</h3>
              <p className="text-on-secondary-container max-w-[200px]">
                {t("playCard.subtitle")}
              </p>
            </div>
            <div className="z-10 self-start">
              <span
                className="material-symbols-outlined text-secondary text-6xl"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                videogame_asset
              </span>
            </div>
            <div className="absolute bottom-0 right-0 w-48 h-40 overflow-hidden rounded-tl-xl pointer-events-none">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=400&q=80"
                alt=""
                fill
                className="object-cover opacity-80"
                sizes="192px"
              />
            </div>
          </Link>
        </div>

        {/* Discover Daily */}
        <section className="bg-surface-container-lowest p-8 md:p-12 rounded-xl shadow-ambient">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-4xl font-bold">{t("discoverDaily")}</h2>
            <Link
              href="/catalog"
              className="text-primary font-bold flex items-center gap-2 hover:underline"
            >
              {t("moreSuggestions")}
              <span className="material-symbols-outlined">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {dailyCountries.map((country) => (
              <Link
                key={country.slug}
                href={`/catalog/${country.slug}`}
                className="bg-surface-container-low p-4 rounded-lg shadow-ambient hover:-translate-y-2 transition-bounce block"
              >
                <div className="w-full h-32 bg-surface-container rounded-lg mb-4 overflow-hidden">
                  <img
                    src={`https://flagcdn.com/w320/${country.flagCode}.png`}
                    alt={`Flag of ${country.name}`}
                    className="w-full h-full object-cover"
                  />
                </div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {country.continent}
                </span>
                <h4 className="font-bold text-lg mt-1">{country.name}</h4>
                <p className="text-on-surface-variant text-sm">{country.capital}</p>
              </Link>
            ))}
          </div>
        </section>
      </section>
    </AppShell>
  );
}

export default function HomePage() {
  return (
    <Suspense>
      <DashboardContent />
    </Suspense>
  );
}
