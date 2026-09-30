import { useTranslations } from "next-intl";

export function Footer() {
  const t = useTranslations("footer");

  return (
    <footer className="mt-auto pt-8 pb-2 text-center text-xs text-white/70">
      <p>{t("copyright", { year: new Date().getFullYear() })}</p>
      <a
        href="https://personal-engineering-hub.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className="mt-2 inline-block text-white/70 underline-offset-2 transition-colors hover:text-white hover:underline"
      >
        {t("meetCreator")}
      </a>
    </footer>
  );
}
