import type { Metadata } from "next";
import { publicMetadata } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "es" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return publicMetadata(locale, "/map");
}

export default function MapLayout({ children }: { children: React.ReactNode }) {
  return children;
}
