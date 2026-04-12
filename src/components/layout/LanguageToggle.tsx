"use client";

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

  return (
    <button
      onClick={switchLocale}
      className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-high rounded-full text-sm font-bold text-on-surface hover:bg-surface-container-highest transition-bounce"
      aria-label={locale === "en" ? "Cambiar a español" : "Switch to English"}
    >
      {locale === "en" ? "🇪🇸 ES" : "🇬🇧 EN"}
    </button>
  );
}
