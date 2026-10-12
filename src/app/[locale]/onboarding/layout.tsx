import type { Metadata } from "next";
import { SITE_ORIGIN } from "@/lib/seo";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: "en" | "es" }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const title = locale === "es" ? "Configura tu perfil" : "Set up your profile";
  const description = locale === "es"
    ? "Configura tu perfil de Atlas del Explorador."
    : "Set up your Explorer's Atlas profile.";
  return {
    title,
    description,
    alternates: { canonical: `${SITE_ORIGIN}/${locale}/onboarding` },
    robots: { index: false, follow: false },
    openGraph: { title, description, url: `${SITE_ORIGIN}/${locale}/onboarding` },
    twitter: { title, description },
  };
}

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
