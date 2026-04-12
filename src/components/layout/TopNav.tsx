"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { SearchInput } from "@/components/ui/SearchInput";
import { LanguageToggle } from "./LanguageToggle";
import { useAuth } from "@/lib/providers/AuthProvider";
import { AuthModal } from "@/components/auth/AuthModal";

type TopNavProps = {
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
};

export function TopNav({ searchQuery, onSearchChange }: TopNavProps) {
  const t = useTranslations("nav");
  const tSearch = useTranslations("search");
  const tAuth = useTranslations("auth");
  const pathname = usePathname();
  const { isAnonymous, displayName, avatarUrl, signOut } = useAuth();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navLinks = [
    { href: "/", label: t("home") },
    { href: "/catalog", label: t("passport") },
    { href: "/games/guess-the-flag", label: t("games") },
    { href: "/map", label: t("map") },
  ] as const;

  return (
    <>
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

            {/* Auth UI */}
            {isAnonymous ? (
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 bg-primary text-white font-bold text-sm rounded-full hover:brightness-110 transition-bounce"
              >
                {tAuth("signIn")}
              </button>
            ) : (
              <div className="relative">
                <button
                  onClick={() => setIsUserMenuOpen((v) => !v)}
                  className="flex items-center gap-2 px-3 py-1.5 bg-surface-container-low rounded-full hover:bg-surface-container transition-bounce"
                >
                  {avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={avatarUrl}
                      alt={displayName}
                      className="w-7 h-7 rounded-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  ) : (
                    <div className="w-7 h-7 rounded-full bg-primary-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-sm text-on-primary-container">
                        person
                      </span>
                    </div>
                  )}
                  <span className="text-sm font-bold text-on-surface max-w-[120px] truncate hidden sm:block">
                    {displayName}
                  </span>
                  <span className="material-symbols-outlined text-xs text-on-surface-variant">
                    expand_more
                  </span>
                </button>

                {isUserMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-30"
                      onClick={() => setIsUserMenuOpen(false)}
                    />
                    <div className="absolute right-0 top-full mt-2 bg-white/90 backdrop-blur-[24px] rounded-xl shadow-ambient py-1 min-w-[140px] z-40">
                      <button
                        onClick={async () => {
                          setIsUserMenuOpen(false);
                          await signOut();
                        }}
                        className="w-full text-left px-4 py-2.5 text-sm font-medium text-on-surface hover:bg-surface-container-low transition-colors flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-sm">logout</span>
                        {tAuth("signOut")}
                      </button>
                    </div>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </header>

      <AuthModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}
