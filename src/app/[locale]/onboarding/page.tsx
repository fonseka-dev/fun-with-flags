"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useRouter } from "@/i18n/navigation";
import { useAuth } from "@/lib/providers/AuthProvider";
import { AvatarPicker, AVATAR_SEEDS } from "@/components/auth/AvatarPicker";
import { validateNickname } from "@/lib/utils/nickname";
import { avatarUrl } from "@/data/types";

export default function OnboardingPage() {
  const t = useTranslations("onboarding");
  const router = useRouter();
  const { isAnonymous, needsOnboarding, progress, completeOnboardingFlow } =
    useAuth();

  const [selectedSeed, setSelectedSeed] = useState<string>(AVATAR_SEEDS[0]);
  const [nickname, setNickname] = useState("");
  const [touched, setTouched] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  // Redirect guards
  useEffect(() => {
    if (isAnonymous) {
      router.replace("/");
    } else if (!needsOnboarding) {
      router.replace("/");
    }
  }, [isAnonymous, needsOnboarding, router]);

  const error = touched ? validateNickname(nickname) : null;
  const isValid = validateNickname(nickname) === null;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setTouched(true);
    if (!isValid || submitting) return;
    setSubmitting(true);
    try {
      await completeOnboardingFlow(nickname.trim(), selectedSeed);
      router.replace("/");
    } finally {
      setSubmitting(false);
    }
  }

  const displayNickname = nickname.trim() || "Explorer";
  const flagsFound = progress?.discoveredCountries.length ?? 0;

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-on-surface mb-2">{t("title")}</h1>
          <p className="text-on-surface-variant">{t("subtitle")}</p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left panel — customisation */}
            <div className="bg-surface-container rounded-3xl p-6 space-y-6">
              {/* Avatar picker */}
              <div>
                <h2 className="text-lg font-semibold text-on-surface mb-4">
                  {t("chooseAvatar")}
                </h2>
                <AvatarPicker selected={selectedSeed} onSelect={setSelectedSeed} />
              </div>

              {/* Nickname input */}
              <div>
                <label
                  htmlFor="nickname"
                  className="block text-sm font-medium text-on-surface mb-1"
                >
                  {t("yourName")}
                </label>
                <input
                  id="nickname"
                  type="text"
                  value={nickname}
                  placeholder={t("namePlaceholder")}
                  maxLength={25}
                  autoComplete="off"
                  className={[
                    "w-full rounded-xl border px-4 py-3 bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-2 focus:ring-primary transition",
                    error ? "border-error focus:ring-error" : "border-outline-variant",
                  ].join(" ")}
                  onChange={(e) => {
                    setNickname(e.target.value);
                    setTouched(true);
                  }}
                  onBlur={() => setTouched(true)}
                />
                {error === "short" || error === "profanity" ? (
                  <p className="mt-1 text-sm text-error">
                    {error === "short" ? t("nameErrorShort") : t("nameErrorProfanity")}
                  </p>
                ) : (
                  <p className="mt-1 text-sm text-on-surface-variant">{t("nameHint")}</p>
                )}
              </div>
            </div>

            {/* Right panel — live preview */}
            <div className="bg-surface-container rounded-3xl p-6 flex flex-col items-center justify-center space-y-4">
              <p className="text-sm font-semibold text-on-surface-variant uppercase tracking-wider">
                {t("profilePreview")}
              </p>

              {/* Avatar */}
              <div className="w-28 h-28 rounded-full overflow-hidden ring-4 ring-primary bg-surface-variant">
                <Image
                  src={avatarUrl(selectedSeed)}
                  alt="preview"
                  width={112}
                  height={112}
                  className="w-full h-full object-cover"
                  unoptimized
                />
              </div>

              {/* Nickname */}
              <p className="text-xl font-bold text-on-surface truncate max-w-full px-2 text-center">
                {displayNickname}
              </p>

              {/* Level badge */}
              <span className="inline-flex items-center gap-1 bg-primary/10 text-primary text-sm font-semibold px-3 py-1 rounded-full">
                <span className="material-symbols-outlined text-[16px]">explore</span>
                {t("levelBadge")}
              </span>

              {/* Stats row */}
              <div className="flex gap-6 mt-2">
                <div className="text-center">
                  <p className="text-2xl font-bold text-on-surface">{flagsFound}</p>
                  <p className="text-xs text-on-surface-variant">{t("flagsFound")}</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-on-surface">1</p>
                  <p className="text-xs text-on-surface-variant">{t("stampRank")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-6 flex justify-center">
            <button
              type="submit"
              disabled={!isValid || submitting}
              className="px-8 py-4 rounded-2xl bg-primary text-on-primary font-bold text-lg shadow-lg hover:bg-primary/90 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {submitting ? (
                <>
                  <span className="material-symbols-outlined animate-spin text-[20px]">
                    progress_activity
                  </span>
                  {t("startExploring")}
                </>
              ) : (
                <>
                  <span className="material-symbols-outlined text-[20px]">rocket_launch</span>
                  {t("startExploring")}
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
