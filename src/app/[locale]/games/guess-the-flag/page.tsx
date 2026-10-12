import { Suspense } from "react";
import type { Metadata } from "next";
import { publicMetadata } from "@/lib/seo";
import { GameContent } from "./GameContent";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "es" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return publicMetadata(locale, "/games/guess-the-flag");
}

export default function GuessTheFlagPage() {
  return (
    <Suspense>
      <GameContent />
    </Suspense>
  );
}
