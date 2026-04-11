"use client";

import { ReactNode, Suspense } from "react";
import { TopNav } from "./TopNav";
import { SideNav } from "./SideNav";
import { BottomNav } from "./BottomNav";
import { useContinentFilter } from "@/lib/hooks/useContinentFilter";

type AppShellProps = {
  children: ReactNode;
  showSidebar?: boolean;
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
};

function AppShellInner({
  children,
  showSidebar = true,
  searchQuery,
  onSearchChange,
}: AppShellProps) {
  const { activeContinent, setContinent } = useContinentFilter();

  return (
    <div className="min-h-screen bg-surface">
      <TopNav searchQuery={searchQuery} onSearchChange={onSearchChange} />
      <div className="flex max-w-screen-2xl mx-auto">
        {showSidebar && (
          <SideNav
            activeContinent={activeContinent}
            onSelectContinent={setContinent}
          />
        )}
        <main className="flex-1 p-6 md:p-12 pb-24 lg:pb-12">
          {children}
        </main>
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
