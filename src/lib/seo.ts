import type { Metadata } from "next";
import type { Locale } from "@/data/types";

export const SITE_ORIGIN = "https://fun-with-flags-six.vercel.app";

export const PUBLIC_PATHS = [
  "",
  "/catalog",
  "/map",
  "/games/guess-the-flag",
  "/leaderboard",
] as const;

type PublicPath = (typeof PUBLIC_PATHS)[number] | `/catalog/${string}`;

const COPY = {
  en: {
    siteName: "Explorer's Atlas",
    imageAlt:
      "Explorer's Atlas: explore countries and flags, with a portrait of creator Jorge Fonseca",
    pages: {
      "": {
        title: "Explorer's Atlas — Explore countries and flags",
        description:
          "Explore countries, discover flags, and test what you know with an interactive map, country guide, and flag games.",
      },
      "/catalog": {
        title: "Countries and flags — Explorer's Atlas",
        description:
          "Browse countries and territories, learn about their flags, capitals, and cultures, and explore by region.",
      },
      "/map": {
        title: "Interactive world map — Explorer's Atlas",
        description:
          "Explore countries around the world on an interactive globe and follow your journey of discovery.",
      },
      "/games/guess-the-flag": {
        title: "Guess the flag — Explorer's Atlas",
        description:
          "Test what you know about the world's flags in a country guessing game.",
      },
      "/leaderboard": {
        title: "World rankings — Explorer's Atlas",
        description:
          "See the Explorer's Atlas rankings based on players' best flag quiz scores.",
      },
    },
  },
  es: {
    siteName: "Atlas del Explorador",
    imageAlt:
      "Atlas del Explorador: explora países y banderas, con un retrato de su creador Jorge Fonseca",
    pages: {
      "": {
        title: "Atlas del Explorador — Países y banderas",
        description:
          "Explora países, descubre banderas y pon a prueba lo que sabes con un mapa interactivo, una guía de países y juegos.",
      },
      "/catalog": {
        title: "Países y banderas — Atlas del Explorador",
        description:
          "Descubre países y territorios, aprende sobre sus banderas, capitales y culturas, y explora por región.",
      },
      "/map": {
        title: "Mapa interactivo del mundo — Atlas del Explorador",
        description:
          "Explora países de todo el mundo en un globo interactivo y sigue tu viaje de descubrimiento.",
      },
      "/games/guess-the-flag": {
        title: "Adivina la bandera — Atlas del Explorador",
        description:
          "Pon a prueba lo que sabes de las banderas del mundo en un juego de países.",
      },
      "/leaderboard": {
        title: "Clasificación mundial — Atlas del Explorador",
        description:
          "Consulta la clasificación del Atlas del Explorador según las mejores puntuaciones en el juego de banderas.",
      },
    },
  },
} as const;

export function pageUrl(locale: Locale, path: PublicPath): string {
  return `${SITE_ORIGIN}/${locale}${path}`;
}

export function publicMetadata(
  locale: Locale,
  path: PublicPath,
  override?: { title: string; description: string },
): Metadata {
  const copy = COPY[locale];
  const page = override ?? copy.pages[path as keyof typeof copy.pages];
  const url = pageUrl(locale, path);
  const image = `${SITE_ORIGIN}/social/explorers-atlas-${locale}.png`;

  return {
    title: page.title,
    description: page.description,
    alternates: {
      canonical: url,
      languages: {
        en: pageUrl("en", path),
        es: pageUrl("es", path),
      },
    },
    robots: process.env.VERCEL_ENV === "preview"
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      type: "website",
      url,
      title: page.title,
      description: page.description,
      siteName: copy.siteName,
      locale: locale === "en" ? "en_US" : "es_ES",
      alternateLocale: locale === "en" ? ["es_ES"] : ["en_US"],
      images: [{ url: image, width: 1200, height: 630, type: "image/png", alt: copy.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: { url: image, alt: copy.imageAlt },
    },
  };
}
