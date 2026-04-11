"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SearchInput } from "@/components/ui/SearchInput";

type TopNavProps = {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
};

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/catalog", label: "Passport" },
  { href: "/games/guess-the-flag", label: "Games" },
  { href: "/map", label: "Map" },
];

export function TopNav({ searchQuery, onSearchChange }: TopNavProps) {
  const pathname = usePathname();

  return (
    <header className="glass sticky top-0 z-40">
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <Link
          href="/"
          className="text-2xl font-extrabold text-primary tracking-tight"
        >
          Explorer&apos;s Atlas
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
              />
            </div>
          )}
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
