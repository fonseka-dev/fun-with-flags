"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function BottomNav() {
  const t = useTranslations("nav");
  const pathname = usePathname();

  const tabs = [
    { href: "/map", icon: "explore", label: t("map") },
    { href: "/games/guess-the-flag", icon: "videogame_asset", label: t("games") },
    { href: "/catalog", icon: "import_contacts", label: t("passport") },
    { href: "/leaderboard", icon: "leaderboard", label: t("leaderboard") },
  ] as const;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-6 pb-6 pt-3 glass rounded-t-xl">
      {tabs.map((tab) => {
        const isActive = pathname.startsWith(tab.href);
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
