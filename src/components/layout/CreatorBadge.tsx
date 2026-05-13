import { getTranslations } from "next-intl/server";

export async function CreatorBadge() {
  const t = await getTranslations("creatorBadge");

  return (
    <a
      href="https://personal-engineering-hub.vercel.app/"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-20 right-2 lg:bottom-2 lg:right-2 z-50 flex items-center gap-1 rounded-full px-2 py-1 bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] transition-all duration-300 ease-out hover:bg-white/20 hover:scale-105"
      aria-label={t("visitCreator")}
    >
      <span>{t("visitCreator")}</span>
      <span className="material-symbols-outlined" style={{ fontSize: 12 }}>
        open_in_new
      </span>
    </a>
  );
}
