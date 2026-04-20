"use client";

import { Suspense } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { Globe } from "@/components/map/Globe";
import { useUserProgress } from "@/lib/hooks/useUserProgress";

function MapContent() {
  const { progress, loading } = useUserProgress();
  const discoveredSlugs = progress?.discoveredCountries ?? [];

  return (
    <AppShell>
      <div className="h-[calc(100vh-4rem)] bg-[#0A0E27]">
        {loading ? (
          <div className="flex h-full items-center justify-center">
            <div className="h-16 w-16 animate-pulse rounded-full border-4 border-white/20" />
          </div>
        ) : (
          <Globe discoveredSlugs={discoveredSlugs} />
        )}
      </div>
    </AppShell>
  );
}

export default function MapPage() {
  return (
    <Suspense>
      <MapContent />
    </Suspense>
  );
}
