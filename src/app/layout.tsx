import type { Metadata } from "next";
import { AuthProvider } from "@/lib/providers/AuthProvider";
import { SITE_ORIGIN } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_ORIGIN),
  title: "Explorer's Atlas",
  description:
    "A digital field guide to the wonders of our planet. Explore flags, countries, and cultures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider>{children}</AuthProvider>;
}
