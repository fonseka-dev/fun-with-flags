import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explorer's Atlas",
  description:
    "A digital field guide to the wonders of our planet. Explore flags, countries, and cultures.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
