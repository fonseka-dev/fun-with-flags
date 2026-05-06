"use client";

import Image from "next/image";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/navigation";

export function LanguageToggle() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  function switchLocale() {
    const newLocale = locale === "en" ? "es" : "en";
    router.replace(pathname, { locale: newLocale });
  }

  // When viewing in English → offer to switch to Spanish (show ES flag)
  // When viewing in Spanish → offer to switch to English (show GB flag)
  const targetFlag = locale === "en" ? "es" : "gb";
  const targetLabel = locale === "en" ? "ES" : "EN";
  const ariaLabel = locale === "en" ? "Cambiar a español" : "Switch to English";

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-high rounded-full text-sm font-bold text-on-surface hover:bg-surface-container-highest transition-bounce"
      aria-label={ariaLabel}
    >
      <Image
        src={`https://flagcdn.com/w20/${targetFlag}.png`}
        alt={targetLabel}
        width={20}
        height={15}
        className="rounded-sm"
      />
      {targetLabel}
    </button>
  );
}
