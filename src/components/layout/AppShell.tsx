"use client";

import { ReactNode, Suspense } from "react";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { BottomNav } from "./BottomNav";
import { useContinentFilter } from "@/lib/hooks/useContinentFilter";
import { Continent } from "@/data/types";

type AppShellProps = {
  children: ReactNode;
  showSidebar?: boolean;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  onContinentSelect?: (continent: Continent | null) => void;
};

function AppShellInner({
  children,
  showSidebar = true,
  searchQuery,
  onSearchChange,
  onContinentSelect,
}: AppShellProps) {
  const { activeContinent, setContinent } = useContinentFilter();

  const handleContinentSelect = onContinentSelect ?? setContinent;

  return (
    <div className="h-screen flex flex-col bg-surface">
      <TopNav searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <div className="flex-1 overflow-hidden">
        <div className="flex h-full max-w-screen-2xl mx-auto">
          {showSidebar && (
            <SideNav
              activeContinent={activeContinent}
              onSelectContinent={handleContinentSelect}
            />
          )}
          <main className="flex-1 overflow-y-auto scrollbar-hidden p-6 md:p-12 pb-24 lg:pb-12">
            {children}
          </main>
        </div>
      </div>
      <BottomNav />
    </div>
  );
}

export function AppShell(props: AppShellProps) {
  return (
    <Suspense>
      <AppShellInner {...props} />
    </Suspense>
  );
}
