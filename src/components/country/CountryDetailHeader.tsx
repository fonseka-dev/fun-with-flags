"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function CountryDetailHeader() {
  const t = useTranslations("country");
  const tNav = useTranslations("nav");

  return (
    <header className="glass sticky top-0 z-40">
      <div className="flex items-center gap-6 px-8 py-4 max-w-screen-xl mx-auto">
        <Link
          href="/catalog"
          className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-bounce group"
        >
          <span className="material-symbols-outlined">arrow_back</span>
          <span className="font-bold">{t("backToCatalog")}</span>
        </Link>
        <span className="text-2xl font-extrabold text-primary tracking-tight">
          {tNav("title")}
        </span>
      </div>
    </header>
  );
}
