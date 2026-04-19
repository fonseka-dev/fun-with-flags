// Minimal blocklist for a kids' app. Extend as needed.
// Intentionally short — defense-in-depth, not a complete filter.
const BLOCKED_WORDS = [
  "ass", "arse", "bastard", "bitch", "bollocks", "bugger", "cock", "crap",
  "cunt", "damn", "dick", "fag", "fuck", "hell", "homo", "idiot", "jerk",
  "kill", "moron", "nazi", "nigger", "penis", "piss", "prick", "pussy",
  "rape", "retard", "sex", "shit", "slut", "spaz", "tit", "twat", "vagina",
  "wank", "whore",
];

function containsBlockedWord(value: string): boolean {
  const lower = value.toLowerCase();
  return BLOCKED_WORDS.some(
    (word) => lower === word || lower.includes(word),
  );
}

export type NicknameError = "short" | "long" | "profanity";

/**
 * Validates a user-chosen nickname.
 * Returns null if valid, or an error code if invalid.
 */
export function validateNickname(raw: string): NicknameError | null {
  const value = raw.trim();
  if (value.length < 2) return "short";
  if (value.length > 20) return "long";
  if (containsBlockedWord(value)) return "profanity";
  return null;
}

