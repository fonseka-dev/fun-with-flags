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
    <nav aria-label={t("title")} className="lg:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-stretch gap-1 px-2 sm:px-6 pb-[calc(0.5rem+env(safe-area-inset-bottom))] pt-2 glass rounded-t-xl">
      {tabs.map((tab) => {
        const isActive = pathname.startsWith(tab.href);
        return (
          <Link
            key={tab.href}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={`
              min-w-0 flex-1 flex flex-col items-center justify-center rounded-2xl px-1 py-2
              transition-bounce
              ${
                isActive
                  ? "bg-primary text-on-primary shadow-ambient"
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
            <span className="max-w-full truncate text-[10px] font-semibold mt-1">{tab.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
