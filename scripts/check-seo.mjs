// Check the production server's direct GET responses without running browser JavaScript.
// Usage: SEO_BASE_URL=http://localhost:3100 node scripts/check-seo.mjs
import { JSDOM } from "jsdom";

const base = process.env.SEO_BASE_URL ?? "http://localhost:3000";
const origin = "https://fun-with-flags-six.vercel.app";
const failures = [];

function expect(condition, message) {
  if (!condition) failures.push(message);
}

async function get(path) {
  return fetch(new URL(path, base), { redirect: "follow" });
}

function meta(document, attribute, name) {
  return [...document.head.querySelectorAll(`meta[${attribute}="${name}"]`)]
    .map((node) => node.getAttribute("content"));
}

async function checkPage(url) {
  const parsed = new URL(url);
  const path = parsed.pathname;
  const locale = path.startsWith("/es") ? "es" : "en";
  const response = await get(path);
  expect(response.status === 200, `${path}: HTTP ${response.status}`);
  expect(response.headers.get("content-type")?.includes("text/html"), `${path}: wrong content type`);
  if (response.status !== 200) return;

  const document = new JSDOM(await response.text()).window.document;
  const title = document.head.querySelectorAll("title");
  const description = meta(document, "name", "description");
  const canonical = [...document.head.querySelectorAll('link[rel="canonical"]')]
    .map((node) => node.getAttribute("href"));
  const alternates = Object.fromEntries(
    [...document.head.querySelectorAll('link[rel="alternate"][hreflang]')]
      .map((node) => [node.getAttribute("hreflang"), node.getAttribute("href")]),
  );
  const suffix = path.replace(/^\/(en|es)/, "");
  const image = `${origin}/social/explorers-atlas-${locale}.png`;

  expect(document.documentElement.lang === locale, `${path}: html lang`);
  expect(title.length === 1 && title[0].textContent?.trim(), `${path}: title`);
  expect(description.length === 1 && description[0], `${path}: description`);
  expect(canonical.length === 1 && canonical[0] === url, `${path}: canonical`);
  expect(alternates.en === `${origin}/en${suffix}`, `${path}: en alternate`);
  expect(alternates.es === `${origin}/es${suffix}`, `${path}: es alternate`);
  expect(meta(document, "property", "og:url")[0] === url, `${path}: og:url`);
  expect(meta(document, "property", "og:title")[0] === title[0]?.textContent, `${path}: og:title`);
  expect(meta(document, "property", "og:description")[0] === description[0], `${path}: og:description`);
  expect(meta(document, "property", "og:locale")[0] === (locale === "en" ? "en_US" : "es_ES"), `${path}: og:locale`);
  expect(meta(document, "property", "og:type")[0] === "website", `${path}: og:type`);
  expect(meta(document, "property", "og:image")[0] === image, `${path}: og:image`);
  expect(meta(document, "property", "og:image:type")[0] === "image/png", `${path}: og:image:type`);
  expect(meta(document, "property", "og:image:width")[0] === "1200", `${path}: og:image:width`);
  expect(meta(document, "property", "og:image:height")[0] === "630", `${path}: og:image:height`);
  expect(Boolean(meta(document, "property", "og:image:alt")[0]), `${path}: og:image:alt`);
  expect(meta(document, "name", "twitter:card")[0] === "summary_large_image", `${path}: twitter:card`);
  expect(meta(document, "name", "twitter:title")[0] === title[0]?.textContent, `${path}: twitter:title`);
  expect(meta(document, "name", "twitter:description")[0] === description[0], `${path}: twitter:description`);
  expect(meta(document, "name", "twitter:image")[0] === image, `${path}: twitter:image`);
  expect(Boolean(meta(document, "name", "twitter:image:alt")[0]), `${path}: twitter:image:alt`);
  expect(!meta(document, "name", "robots").some((value) => value?.includes("noindex")), `${path}: unexpected noindex`);
}

const sitemapResponse = await get("/sitemap.xml");
expect(sitemapResponse.status === 200, `sitemap: HTTP ${sitemapResponse.status}`);
expect(sitemapResponse.headers.get("content-type")?.includes("xml"), "sitemap: wrong content type");
const sitemapDocument = new JSDOM(await sitemapResponse.text(), { contentType: "application/xml" }).window.document;
expect(!sitemapDocument.querySelector("parsererror"), "sitemap: invalid XML");
const urls = [...sitemapDocument.getElementsByTagName("loc")].map((node) => node.textContent);
expect(urls.length === 500, `sitemap: expected 500 URLs, found ${urls.length}`);
expect(new Set(urls).size === urls.length, "sitemap: duplicate URLs");
expect(urls.every((url) => url.startsWith(`${origin}/`) && !url.includes("/onboarding")), "sitemap: non-public URL");

const robotsResponse = await get("/robots.txt");
const robots = await robotsResponse.text();
expect(robotsResponse.status === 200, `robots: HTTP ${robotsResponse.status}`);
expect(robotsResponse.headers.get("content-type")?.includes("text/plain"), "robots: wrong content type");
expect(robots.includes(`Sitemap: ${origin}/sitemap.xml`), "robots: sitemap URL");

for (const locale of ["en", "es"]) {
  const response = await get(`/social/explorers-atlas-${locale}.png`);
  expect(response.status === 200, `${locale} image: HTTP ${response.status}`);
  expect(response.headers.get("content-type")?.includes("image/png"), `${locale} image: wrong content type`);
  const bytes = Buffer.from(await response.arrayBuffer());
  expect(bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])), `${locale} image: invalid PNG`);
  expect(bytes.readUInt32BE(16) === 1200 && bytes.readUInt32BE(20) === 630, `${locale} image: dimensions`);
}

for (const locale of ["en", "es"]) {
  const response = await get(`/${locale}/onboarding`);
  const document = new JSDOM(await response.text()).window.document;
  expect(response.status === 200, `${locale} onboarding: HTTP ${response.status}`);
  expect(meta(document, "name", "robots").some((value) => value?.includes("noindex")), `${locale} onboarding: missing noindex`);
}

const workers = Array.from({ length: 12 }, async (_, worker) => {
  for (let i = worker; i < urls.length; i += 12) await checkPage(urls[i]);
});
await Promise.all(workers);

if (failures.length) {
  console.error(failures.join("\n"));
  process.exitCode = 1;
} else {
  console.log(`SEO GET contract passed: ${urls.length} public pages, robots, sitemap, 2 cards, 2 onboarding pages.`);
}
