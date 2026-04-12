/**
 * Seeds Firestore with country data from countries-195.json.
 *
 * Requires Firebase Admin SDK credentials.
 * Set GOOGLE_APPLICATION_CREDENTIALS env var to the path of your service account JSON.
 *
 * Run: GOOGLE_APPLICATION_CREDENTIALS=./service-account.json npx tsx scripts/seed-countries.ts
 */

import { readFileSync } from "fs";
import { join } from "path";
import { initializeApp, cert, type ServiceAccount } from "firebase-admin/app";
import { getFirestore, WriteBatch } from "firebase-admin/firestore";

// Load service account from env
const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS;
if (!serviceAccountPath) {
  console.error("Set GOOGLE_APPLICATION_CREDENTIALS to your service account JSON path");
  process.exit(1);
}

const serviceAccount = JSON.parse(
  readFileSync(serviceAccountPath, "utf-8"),
) as ServiceAccount;

initializeApp({ credential: cert(serviceAccount) });
const db = getFirestore();

type CountryEntry = {
  slug: string;
  flagCode: string;
  continent: string;
  population: string;
  region: string;
  translations: {
    en: { name: string; capital: string; flagDescription: string; funFacts: { icon: string; title: string; description: string }[] };
    es: { name: string; capital: string; flagDescription: string; funFacts: { icon: string; title: string; description: string }[] };
  };
};

async function seed() {
  const dataPath = join(__dirname, "data", "countries-195.json");
  const countries: CountryEntry[] = JSON.parse(readFileSync(dataPath, "utf-8"));

  console.log(`Seeding ${countries.length} countries...`);

  // Firestore batch limit is 500 operations
  const MAX_OPS = 500;
  let batch: WriteBatch = db.batch();
  let opCount = 0;
  let batchCount = 0;

  async function flushBatch() {
    if (opCount > 0) {
      await batch.commit();
      batchCount++;
      console.log(`  Committed batch ${batchCount} (${opCount} ops)`);
      batch = db.batch();
      opCount = 0;
    }
  }

  for (const country of countries) {
    // Write country base doc
    const countryRef = db.collection("countries").doc(country.slug);
    batch.set(
      countryRef,
      {
        slug: country.slug,
        flagCode: country.flagCode,
        continent: country.continent,
        population: country.population,
        region: country.region,
      },
      { merge: true },
    );
    opCount++;

    // Write EN translation
    const enRef = countryRef.collection("translations").doc("en");
    batch.set(enRef, country.translations.en, { merge: true });
    opCount++;

    // Write ES translation
    const esRef = countryRef.collection("translations").doc("es");
    batch.set(esRef, country.translations.es, { merge: true });
    opCount++;

    if (opCount >= MAX_OPS - 3) {
      await flushBatch();
    }
  }

  await flushBatch();
  console.log(`Done! Seeded ${countries.length} countries in ${batchCount} batches.`);
}

seed().catch((err) => {
  console.error("Seeding failed:", err);
  process.exit(1);
});
