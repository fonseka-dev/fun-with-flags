import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import sitemap from "@/app/sitemap";
import robots from "@/app/robots";
import { getCountrySlugs } from "@/lib/utils/countries";
import { pageUrl, publicMetadata, PUBLIC_PATHS, SITE_ORIGIN } from "@/lib/seo";

describe("public SEO contract", () => {
  it("keeps canonicals, translated alternatives, and sharing URLs aligned", () => {
    for (const locale of ["en", "es"] as const) {
      for (const path of [...PUBLIC_PATHS, "/catalog/spain"] as const) {
        const override = path === "/catalog/spain"
          ? { title: "Spain", description: "Spain's flag and capital" }
          : undefined;
        const metadata = publicMetadata(locale, path, override);
        const expectedUrl = pageUrl(locale, path);
        const expectedImage = `${SITE_ORIGIN}/social/explorers-atlas-${locale}.png`;

        expect(metadata.alternates?.canonical).toBe(expectedUrl);
        expect(metadata.alternates?.languages).toEqual({
          en: pageUrl("en", path),
          es: pageUrl("es", path),
        });
        expect(metadata.openGraph).toMatchObject({
          url: expectedUrl,
          title: metadata.title,
          description: metadata.description,
          images: [{ url: expectedImage, width: 1200, height: 630 }],
        });
        expect(metadata.twitter).toMatchObject({
          card: "summary_large_image",
          title: metadata.title,
          description: metadata.description,
          images: { url: expectedImage },
        });
      }
    }
  });

  it("lists every public localized route and excludes onboarding", () => {
    const entries = sitemap();
    const pathsPerLocale = PUBLIC_PATHS.length + getCountrySlugs().length;
    expect(entries).toHaveLength(pathsPerLocale * 2);
    expect(new Set(entries.map((entry) => entry.url)).size).toBe(entries.length);
    expect(entries.every((entry) => entry.url.startsWith(`${SITE_ORIGIN}/`))).toBe(true);
    expect(entries.every((entry) => !entry.url.includes("/onboarding"))).toBe(true);
    for (const entry of entries) {
      const path = new URL(entry.url).pathname.replace(/^\/(en|es)/, "");
      expect(entry.alternates?.languages).toEqual({
        en: pageUrl("en", path as Parameters<typeof pageUrl>[1]),
        es: pageUrl("es", path as Parameters<typeof pageUrl>[1]),
      });
    }
    expect(robots().sitemap).toBe(`${SITE_ORIGIN}/sitemap.xml`);
  });

  it("ships real 1200 × 630 PNGs for both locales", () => {
    for (const locale of ["en", "es"]) {
      const file = readFileSync(join(process.cwd(), "public", "social", `explorers-atlas-${locale}.png`));
      expect(file.subarray(0, 8)).toEqual(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]));
      expect(file.readUInt32BE(16)).toBe(1200);
      expect(file.readUInt32BE(20)).toBe(630);
    }
  });

  it("marks preview HTML as noindex", () => {
    const previous = process.env.VERCEL_ENV;
    process.env.VERCEL_ENV = "preview";
    try {
      expect(publicMetadata("en", "").robots).toEqual({ index: false, follow: false });
    } finally {
      if (previous === undefined) delete process.env.VERCEL_ENV;
      else process.env.VERCEL_ENV = previous;
    }
  });
});
