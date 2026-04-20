"use client";

import { Suspense } from "react";
import { TopNav } from "@/components/layout/TopNav";
import { Globe } from "@/components/map/Globe";
import { useUserProgress } from "@/lib/hooks/useUserProgress";

function MapContent() {
  const { progress, loading } = useUserProgress();
  const discoveredSlugs = progress?.discoveredCountries ?? [];

  return (
    <div className="relative h-screen overflow-hidden bg-[#0A0E27]">
      <div className="absolute inset-x-0 top-0 z-20">
        <TopNav />
      </div>
      {loading ? (
        <div className="flex h-full items-center justify-center">
          <div className="h-16 w-16 animate-pulse rounded-full border-4 border-white/20" />
        </div>
      ) : (
        <Globe discoveredSlugs={discoveredSlugs} />
      )}
    </div>
  );
}

export default function MapPage() {
  return (
    <Suspense>
      <MapContent />
    </Suspense>
  );
}
