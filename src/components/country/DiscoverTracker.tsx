"use client";

import { useEffect } from "react";
import { useUserProgress } from "@/lib/hooks/useUserProgress";

type DiscoverTrackerProps = {
  slug: string;
};

export function DiscoverTracker({ slug }: DiscoverTrackerProps) {
  const { discoverCountry } = useUserProgress();

  useEffect(() => {
    discoverCountry(slug);
  }, [slug, discoverCountry]);

  return null;
}
