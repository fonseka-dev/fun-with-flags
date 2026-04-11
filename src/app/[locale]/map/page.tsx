"use client";

import { Suspense } from "react";
import { AppShell } from "@/components/layout/AppShell";
import { WorldMap } from "@/components/map/WorldMap";

function MapContent() {
  return (
    <AppShell>
      <div className="h-[calc(100vh-12rem)]">
        <WorldMap className="w-full h-full" />
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
