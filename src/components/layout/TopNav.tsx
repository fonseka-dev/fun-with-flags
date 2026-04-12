"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { SearchInput } from "@/components/ui/SearchInput";
import { LanguageToggle } from "./LanguageToggle";

type TopNavProps = {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
};

export function TopNav({ searchQuery, onSearchChange }: TopNavProps) {
  const t = useTranslations("nav");
  const tSearch = useTranslations("search");
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/catalog", label: t("passport") },
    { href: "/games/guess-the-flag", label: t("games") },
    { href: "/map", label: t("map") },
  ] as const;

  return (
    <header className="glass sticky top-0 z-40">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-extrabold text-primary tracking-tight"
        >
          {t("title")}
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`
                  font-bold text-lg transition-bounce
                  ${
                    isActive
                      ? "text-primary border-b-4 border-primary"
                      : "text-on-surface-variant hover:text-on-surface hover:scale-105"
                  }
                `}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-4">
          {onSearchChange && (
            <div className="hidden sm:block">
              <SearchInput
                value={searchQuery ?? ""}
                onChange={onSearchChange}
                placeholder={tSearch("placeholder")}
              />
            </div>
          )}
          <LanguageToggle />
          <div className="flex gap-2">
            <Link
              href="/map"
              className="material-symbols-outlined text-primary p-2 bg-surface-container-low rounded-full hover:scale-105 transition-bounce"
            >
              public
            </Link>
            <Link
              href="/games/guess-the-flag"
              className="material-symbols-outlined text-primary p-2 bg-surface-container-low rounded-full hover:scale-105 transition-bounce"
            >
              sports_esports
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
