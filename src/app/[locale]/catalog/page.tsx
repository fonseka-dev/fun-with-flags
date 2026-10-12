import { Suspense } from "react";
import type { Metadata } from "next";
import { publicMetadata } from "@/lib/seo";
import { CatalogContent } from "./CatalogContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "es" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return publicMetadata(locale, "/catalog");
}

export default function CatalogPage() {
  return (
    <Suspense>
      <CatalogContent />
    </Suspense>
  );
}
