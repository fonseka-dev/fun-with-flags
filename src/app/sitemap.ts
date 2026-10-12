import type { MetadataRoute } from "next";
import { getCountrySlugs } from "@/lib/utils/countries";
import { pageUrl, PUBLIC_PATHS } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...PUBLIC_PATHS,
    ...getCountrySlugs().map((slug) => `/catalog/${slug}` as const),
  ];

  return paths.flatMap((path) =>
    (["en", "es"] as const).map((locale) => ({
      url: pageUrl(locale, path),
      alternates: {
        languages: {
          en: pageUrl("en", path),
          es: pageUrl("es", path),
        },
      },
    })),
  );
}
