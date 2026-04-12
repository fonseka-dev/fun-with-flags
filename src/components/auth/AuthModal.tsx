"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useAuth } from "@/lib/providers/AuthProvider";

type AuthModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const t = useTranslations("auth");
  const { signInWithGoogle, displayName, progress } = useAuth();
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!isOpen) return null;

  async function handleSignIn() {
    setIsSigningIn(true);
    setError(null);
    try {
      await signInWithGoogle();
      onClose();
    } catch {
      setError(t("signInError"));
    } finally {
      setIsSigningIn(false);
    }
  }

  const countriesCount = progress?.discoveredCountries.length ?? 0;
  const highScore = progress?.quizHighScore ?? 0;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white/90 backdrop-blur-[24px] rounded-2xl shadow-ambient p-8 w-full max-w-md relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-on-surface-variant hover:text-on-surface transition-colors p-1 rounded-full hover:bg-surface-container"
          aria-label={t("close")}
        >
          <span className="material-symbols-outlined">close</span>
        </button>

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          <div className="w-16 h-16 bg-primary-container rounded-full flex items-center justify-center mb-4">
            <span
              className="material-symbols-outlined text-3xl text-on-primary-container"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              public
            </span>
          </div>
          <h2 className="text-2xl font-extrabold text-on-surface mb-1">
            {t("signInTitle")}
          </h2>
          <p className="text-on-surface-variant text-sm leading-[1.6]">
            {t("signInSubtitle")}
          </p>
        </div>

        {/* Current progress summary */}
        <div className="bg-surface-container-low rounded-xl p-4 mb-6 text-center">
          <p className="text-xs text-on-surface-variant mb-1">{t("anonymousLabel")}</p>
          <p className="font-bold text-on-surface">{displayName}</p>
          <p className="text-xs text-on-surface-variant mt-1">
            {t("progressSummary", { countries: countriesCount, score: highScore })}
          </p>
        </div>

        {/* Error */}
        {error && (
          <p className="text-error text-sm text-center mb-4">{error}</p>
        )}

        {/* Sign-in button */}
        <button
          onClick={handleSignIn}
          disabled={isSigningIn}
          className="w-full flex items-center justify-center gap-3 bg-primary text-white font-bold py-4 px-6 rounded-xl transition-bounce hover:brightness-110 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSigningIn ? (
            <>
              <span className="material-symbols-outlined animate-spin">
                refresh
              </span>
              {t("signingIn")}
            </>
          ) : (
            <>
              {/* Google logo SVG */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              {t("signInWithGoogle")}
            </>
          )}
        </button>
      </div>
    </div>
  );
}
