"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { useAuth } from "@/lib/providers/AuthProvider";
import { AvatarPicker } from "@/components/auth/AvatarPicker";
import { avatarUrl } from "@/data/types";

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export function ProfileDialog({ isOpen, onClose }: Props) {
  const t = useTranslations("profile");
  const tAuth = useTranslations("auth");
  const { nickname, avatarSeed, progress, updateAvatarSeed, signOut } = useAuth();

  const [changingAvatar, setChangingAvatar] = useState(false);
  const [pendingSeed, setPendingSeed] = useState(avatarSeed);
  const [saving, setSaving] = useState(false);

  if (!isOpen) return null;

  async function handleSaveAvatar() {
    setSaving(true);
    try {
      await updateAvatarSeed(pendingSeed);
      setChangingAvatar(false);
    } finally {
      setSaving(false);
    }
  }

  function handleCancel() {
    setPendingSeed(avatarSeed);
    setChangingAvatar(false);
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4"
      role="dialog"
      aria-modal="true"
      aria-label={t("title")}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-surface rounded-3xl p-6 w-full max-w-sm shadow-2xl space-y-5">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-on-surface">{t("title")}</h2>
          <button
            type="button"
            aria-label={t("close")}
            onClick={onClose}
            className="text-on-surface-variant hover:text-on-surface transition"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Avatar */}
        <div className="flex flex-col items-center gap-3">
          <div className="w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary bg-surface-variant">
            <Image
              src={avatarUrl(changingAvatar ? pendingSeed : avatarSeed)}
              alt={nickname}
              width={96}
              height={96}
              className="w-full h-full object-cover"
              unoptimized
            />
          </div>

          {changingAvatar ? (
            <div className="w-full space-y-3">
              <AvatarPicker selected={pendingSeed} onSelect={setPendingSeed} />
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={handleCancel}
                  className="flex-1 py-2 rounded-xl border border-outline-variant text-on-surface text-sm font-medium hover:bg-surface-variant transition"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={handleSaveAvatar}
                  disabled={saving}
                  className="flex-1 py-2 rounded-xl bg-primary text-on-primary text-sm font-semibold hover:bg-primary/90 transition disabled:opacity-50"
                >
                  {saving ? "Saving…" : "Save"}
                </button>
              </div>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                setPendingSeed(avatarSeed);
                setChangingAvatar(true);
              }}
              className="text-sm text-primary font-semibold hover:underline"
            >
              {t("changeAvatar")}
            </button>
          )}
        </div>

        {/* Nickname (locked) */}
        <div className="bg-surface-variant rounded-2xl px-4 py-3 flex items-center gap-3">
          <span className="material-symbols-outlined text-on-surface-variant text-[20px]">
            lock
          </span>
          <div>
            <p className="font-semibold text-on-surface">{nickname}</p>
            <p className="text-xs text-on-surface-variant">{t("nicknameLocked")}</p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-2 text-center">
          <div className="bg-surface-variant rounded-2xl py-3">
            <p className="text-xl font-bold text-on-surface">
              {progress?.discoveredCountries.length ?? 0}
            </p>
            <p className="text-xs text-on-surface-variant">{t("flagsFound")}</p>
          </div>
          <div className="bg-surface-variant rounded-2xl py-3">
            <p className="text-xl font-bold text-on-surface">
              {progress?.quizHighScore ?? 0}
            </p>
            <p className="text-xs text-on-surface-variant">{t("highScore")}</p>
          </div>
          <div className="bg-surface-variant rounded-2xl py-3">
            <p className="text-xl font-bold text-on-surface">
              {progress?.quizGamesPlayed ?? 0}
            </p>
            <p className="text-xs text-on-surface-variant">{t("gamesPlayed")}</p>
          </div>
        </div>

        {/* Sign out */}
        <button
          type="button"
          onClick={signOut}
          className="w-full text-center text-sm text-on-surface-variant hover:text-error transition"
        >
          {tAuth("signOut")}
        </button>
      </div>
    </div>
  );
}
