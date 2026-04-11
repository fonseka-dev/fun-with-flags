"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/map", icon: "explore", label: "Map" },
  { href: "/games/guess-the-flag", icon: "videogame_asset", label: "Games" },
  { href: "/catalog", icon: "import_contacts", label: "Passport" },
];

export function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-6 pt-3 glass rounded-t-xl">
      {tabs.map((tab) => {
        const isActive =
          tab.href === "/"
            ? pathname === "/"
            : pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            className={`
              flex flex-col items-center justify-center p-3
              transition-bounce
              ${
                isActive
                  ? "bg-primary text-on-primary rounded-2xl scale-110 -translate-y-2 shadow-ambient"
                  : "text-on-surface-variant hover:text-primary"
              }
            `}
          >
            <span
              className="material-symbols-outlined"
              style={
                isActive
                  ? { fontVariationSettings: "'FILL' 1" }
                  : undefined
              }
            >
              {tab.icon}
            </span>
            <span className="text-[10px] font-medium mt-1">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
