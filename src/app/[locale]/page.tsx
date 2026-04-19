"use client";

import { useMemo, Suspense } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { AppShell } from "@/components/layout/AppShell";
import { Button } from "@/components/ui/Button";
import { useCountries } from "@/lib/providers/CountriesProvider";
import { useAuth } from "@/lib/providers/AuthProvider";

// Computed once at module load — stable within a session, changes on next page load each day
const _now = Date.now();
const DAY_OF_YEAR = Math.floor(
  (_now - new Date(new Date(_now).getFullYear(), 0, 0).getTime()) / 86_400_000,
);

function DashboardContent() {
  const t = useTranslations("home");
  const { countries } = useCountries();
  const { progress, isAnonymous, nickname } = useAuth();

  // Pick 4 countries daily — deterministic based on day-of-year (DAY_OF_YEAR computed at module load)
  const dailyCountries = useMemo(() => {
    if (countries.length === 0) return [];
    const step = Math.floor(countries.length / 4);
    return [0, 1, 2, 3].map((i) => countries[(DAY_OF_YEAR + i * step) % countries.length]);
  }, [countries]);

  return (
    <AppShell showSidebar>
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
            <div className="p-8 pb-0">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-3xl font-bold mb-2">{t("mapCard.title")}</h3>
                  <p className="text-on-surface-variant">
                    {t("mapCard.subtitle")}
                  </p>
                </div>
                <div className="bg-primary-container p-4 rounded-full text-on-primary-container">
                  <span
                    className="material-symbols-outlined text-4xl"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    explore
                  </span>
                </div>
              </div>
            </div>
            <div className="relative mt-8 h-64 w-full overflow-hidden bg-surface-container">
              <div className="w-full h-full flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-8xl opacity-20">
                  public
                </span>
              </div>
            </div>
          </Link>

          {/* Journey Progress */}
          <div className="md:col-span-4 bg-tertiary-container text-on-tertiary-container rounded-xl p-8 flex flex-col justify-between shadow-ambient">
            <div>
              <h3 className="text-2xl font-bold mb-1">{t("journey.title")}</h3>
              <p className="opacity-80">{t("journey.progress", { discovered: progress?.discoveredCountries.length ?? 0, total: 245 })}</p>
              {(progress?.quizHighScore ?? 0) > 0 && (
                <p className="text-sm opacity-70 mt-1">
                  {t("journey.highScore", { score: progress?.quizHighScore ?? 0 })}
                </p>
              )}
            </div>
            <div className="relative py-8 flex justify-center">
              <div className="w-32 h-32 rounded-full bg-white/20 flex items-center justify-center">
                <span
                  className="material-symbols-outlined text-6xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  emoji_events
                </span>
              </div>
            </div>
            <Button
              variant="ghost"
              fullWidth
              className="bg-on-tertiary-container text-tertiary-container hover:brightness-90"
              disabled
            >
              {t("journey.viewPassport")}
            </Button>
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
              <span className="material-symbols-outlined text-primary text-6xl">
                auto_stories
              </span>
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
              <span className="material-symbols-outlined text-secondary text-6xl">
                videogame_asset
              </span>
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
