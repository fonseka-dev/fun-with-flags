"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "@/i18n/navigation";
import { useAuth } from "@/lib/providers/AuthProvider";

/**
 * Redirects authenticated users who haven't completed onboarding to /onboarding.
 * Must be rendered inside AuthProvider.
 */
export function OnboardingGuard() {
  const { needsOnboarding, loading } = useAuth();
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (loading) return;
    if (needsOnboarding && pathname !== "/onboarding") {
      router.replace("/onboarding");
    }
  }, [loading, needsOnboarding, pathname, router]);

  return null;
}
