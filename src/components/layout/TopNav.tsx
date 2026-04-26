"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { SearchInput } from "@/components/ui/SearchInput";
import { LanguageToggle } from "./LanguageToggle";
import { useAuth } from "@/lib/providers/AuthProvider";
import { AuthModal } from "@/components/auth/AuthModal";
import { ProfileDialog } from "@/components/auth/ProfileDialog";

type TopNavProps = {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
  transparent?: boolean;
};

export function TopNav({ searchQuery, onSearchChange, transparent = false }: TopNavProps) {
  const t = useTranslations("nav");
  const tSearch = useTranslations("search");
  const tAuth = useTranslations("auth");
  const pathname = usePathname();
  const { isAnonymous, nickname, avatarUrl } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/catalog", label: t("passport") },
    { href: "/games/guess-the-flag", label: t("games") },
    { href: "/map", label: t("map") },
    { href: "/leaderboard", label: t("leaderboard") },
  ] as const;

  return (
    <>
      <header
        className={
          transparent
            ? "bg-transparent backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.4)] sticky top-0 z-40"
            : "glass sticky top-0 z-40"
        }
      >
        <div className="flex justify-between items-center w-full px-4 sm:px-8 py-3 sm:py-4 max-w-screen-2xl mx-auto">
          <Link
            href="/"
            className={`text-xl sm:text-2xl font-extrabold tracking-tight ${
              transparent ? "text-white" : "text-primary"
            }`}
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
                      transparent
                        ? isActive
                          ? "text-white border-b-4 border-white"
                          : "text-white/70 hover:text-white hover:scale-105"
                        : isActive
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

          <div className="flex items-center gap-2 sm:gap-4">
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
            <div className="hidden md:flex gap-2" aria-label="Quick links">
              <Link
                href="/map"
                aria-label={t("map")}
                className="material-symbols-outlined text-primary p-2 bg-surface-container-low rounded-full hover:scale-105 transition-bounce"
              >
                public
              </Link>
              <Link
                href="/games/guess-the-flag"
                aria-label={t("games")}
                className="material-symbols-outlined text-primary p-2 bg-surface-container-low rounded-full hover:scale-105 transition-bounce"
              >
                sports_esports
              </Link>
            </div>

            {/* Auth UI */}
            {isAnonymous ? (
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-primary text-white font-bold text-sm rounded-full hover:brightness-110 transition-bounce"
              >
                {tAuth("signIn")}
              </button>
            ) : (
              <button
                onClick={() => setIsProfileOpen(true)}
                className="flex items-center gap-2 px-2.5 sm:px-3 py-1.5 bg-surface-container-low rounded-full hover:bg-surface-container transition-bounce"
                aria-label="Open profile"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={avatarUrl}
                  alt={nickname}
                  className="w-7 h-7 rounded-full object-cover"
                />
                <span className="text-sm font-bold text-on-surface max-w-[120px] truncate hidden sm:block">
                  {nickname}
                </span>
              </button>
            )}
          </div>
        </div>
      </header>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <ProfileDialog isOpen={isProfileOpen} onClose={() => setIsProfileOpen(false)} />
    </>
  );
}
