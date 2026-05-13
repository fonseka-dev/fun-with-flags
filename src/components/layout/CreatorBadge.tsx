import { getTranslations } from "next-intl/server";

export async function CreatorBadge() {
  const t = await getTranslations("creatorBadge");

  return (
    <a
      href="https://personal-engineering-hub.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-4 lg:bottom-6 lg:right-6 z-50 flex items-center gap-1.5 rounded-full px-3 py-1.5 bg-white/15 backdrop-blur-md border border-white/25 text-white text-xs font-medium transition-all duration-300 ease-out hover:bg-white/25 hover:scale-105"
      aria-label={t("visitCreator")}
    >
      <span>{t("visitCreator")}</span>
      <span className="material-symbols-outlined" style={{ fontSize: 14 }}>
        open_in_new
      </span>
    </a>
  );
}
