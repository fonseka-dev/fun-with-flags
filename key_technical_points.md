# Key Technical Points — FunWithFlags

> **Purpose:** A living reference for AI agents (and humans) working on this codebase.  
> Each entry documents a real bug we hit, the root cause, and the verified fix.  
> **Update this file immediately after every non-trivial bug resolution.**

## Stack Versions (as of April 2026)
- Next.js `16.2.3` (App Router)
- React `19.2.4`
- Firebase `^12.12.0` (modular/v9+ SDK)
- TypeScript, Tailwind CSS, Vitest, next-intl

---

## 1. Firebase Auth — Modular SDK Error Shape (CRITICAL)

### Problem
When catching a `auth/credential-already-in-use` error (thrown by `linkWithPopup`), the old v8 pattern accesses `error.credential`. **This does not exist in the v9+ modular SDK.**

```typescript
// ❌ WRONG — always undefined in Firebase v9+ modular SDK
const credential = (error as any).credential;
if (!credential) throw err;   // always throws — merge flow is broken
```

### Root Cause
In Firebase v9+ modular SDK the credential is stored at `error.customData`, not at the top level of the error object. The type declaration hides this.

### Fix
Use the static helper on the provider class:

```typescript
// ✅ CORRECT — Firebase v9+ modular SDK
import { GoogleAuthProvider } from "firebase/auth";

const credential = GoogleAuthProvider.credentialFromError(err as Error);
if (!credential) throw err;
// Now proceed with signInWithCredential(auth, credential)
```

### Also applies to
- `FacebookAuthProvider.credentialFromError`
- `GithubAuthProvider.credentialFromError`
- `OAuthProvider.credentialFromError` (generic)

---

## 2. Firebase Auth — Race Condition After `linkWithPopup`

### Problem
After a successful `linkWithPopup` (anonymous → Google), the TopNav showed the stale "Explorer #1053" pseudonym instead of the real Google display name.

### Root Cause
Two concurrent async paths both wrote to `setProgress` after `linkWithPopup`:
1. `onAuthStateChanged` fires → reads Firestore → `setProgress(staleDoc)`
2. `signInWithGoogle` callback → reads Firestore → `setProgress(freshDoc)`

Whichever resolved **last** won. The Firestore read often returned stale data from the anonymous session.

### Fix
For non-anonymous users, derive `displayName` and `avatarUrl` from the **Firebase `User` object** directly instead of from Firestore. These values are synchronously available when `setUser()` is called.

```typescript
// ✅ In AuthProvider — read identity values from Firebase User, not Firestore
const isAnonymous = user?.isAnonymous ?? true;
const displayName = (!isAnonymous && user?.displayName)
  ? user.displayName
  : (progress?.displayName ?? (user ? "Explorer" : ""));
const avatarUrl = (!isAnonymous && user?.photoURL)
  ? user.photoURL
  : (progress?.avatarUrl ?? null);
```

The Firestore `progress` document is still used for game data (countries discovered, scores). Only identity fields are sourced from the Firebase `User` object.

---

## 3. Firebase Auth — Console Setup (First-Time Gotchas)

### 3a. `auth/operation-not-allowed`
**All sign-in providers are disabled by default** when you create a Firebase project.

**Fix:** Firebase Console → Build → Authentication → Sign-in method → Google → Enable toggle ON → enter support email → Save.

### 3b. `auth/unauthorized-domain`
Localhost is not automatically an authorized domain.

**Fix:** Firebase Console → Build → Authentication → Settings → Authorized domains → Add `localhost`.

### 3c. `auth/popup-blocked`
Browser blocked the popup window. This is a user browser setting, not a code bug.

**Fix in code:** Catch and silently swallow this error — it is not an application error.

```typescript
if (error.code === "auth/popup-closed-by-user") return;
if (error.code === "auth/cancelled-popup-request") return;
if (error.code === "auth/popup-blocked") return;
```

---

## 4. Firebase — Lazy Initialization Pattern (Required for Next.js)

### Problem
Next.js renders components on the server (SSR / RSC). Firebase Auth and Firestore are browser-only. Calling `getAuth()` or `getFirestore()` during SSR throws or produces undefined behavior.

### Fix
Never call Firebase at module load time. Use lazy getter functions:

```typescript
// ✅ CORRECT — lazy, browser-only initialization
function getFirebaseApp() {
  if (typeof window === "undefined") {
    throw new Error("Firebase is only available on the client");
  }
  return getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApps()[0];
}

export function getAuthClient() {
  return getAuth(getFirebaseApp());
}

export function getDbClient() {
  return getFirestore(getFirebaseApp());
}
```

```typescript
// ❌ WRONG — instantiated at module load, crashes SSR
export const auth = getAuth(initializeApp(firebaseConfig));
export const db   = getFirestore();
```

All components that use Firebase must be `"use client"` or called only from client contexts.

---

## 5. Firebase Auth — Anonymous → Google Account Linking

### Pattern in Use
`linkWithPopup(currentUser, googleProvider)` upgrades an anonymous session to a Google account **while preserving the same UID**. This means:
- All Firestore data keyed on the anonymous UID is inherited automatically.
- No data migration needed in the happy path.

### Edge Case: `auth/credential-already-in-use`
Thrown if the Google account being linked is **already registered** as a different Firebase user (different UID). In this case:

1. Extract the credential via `GoogleAuthProvider.credentialFromError(err)`.
2. Call `signInWithCredential(auth, credential)` to sign in as the existing Google user.
3. Merge the anonymous user's Firestore data into the Google user's document.
4. **Always** call `initUserProgress` for the Google UID even if the anonymous document is empty — the document may have been deleted.

```typescript
// ✅ Always recreate the google user's doc, then conditionally merge
await initUserProgress(googleUid, { displayName, isAnonymous: false, avatarUrl });
if (anonProgress) {
  // merge discoveredCountries and quizHighScore
}
```

### UID Stability Note
After a successful `linkWithPopup`, the UID **does not change**. `onAuthStateChanged` fires again with the same UID but `user.isAnonymous === false`.

---

## 6. Next.js Dev Mode — `console.error` Triggers Error Overlay

### Problem
Next.js development mode intercepts `console.error` calls and displays a full-page error overlay in the browser, even for **caught and handled** errors.

### Fix
Use `console.warn` (or `console.log`) for errors that are expected, caught, and handled:

```typescript
// ❌ Triggers Next.js dev overlay
console.error("[Auth] sign-in failed:", error.code);

// ✅ Does not trigger overlay; still visible in DevTools
console.warn("[Auth] sign-in failed:", error.code);
```

**Rule of thumb:** Only use `console.error` for truly unhandled, unexpected failures that the developer absolutely must address.

---

## 7. Next.js — `.next/` Must Be in `.gitignore`

### Problem
The `.next/` directory contains the Turbopack/Webpack build cache and compiled output. It is large, binary-heavy, and regenerated on every build. It must never be committed to git.

### Fix
```
# .gitignore
.next/
```

Also untrack if already committed:
```bash
git rm -r --cached .next/
git add .gitignore
git commit -m "chore: add .next/ to .gitignore"
```

---

## 8. Firestore — Deleted Documents and `initUserProgress`

### Problem
During development, the Firestore user document was manually deleted to "reset" progress. On next sign-in, `getUserProgress(uid)` returned `null`. Subsequent calls to `updateDoc` (e.g. in the merge path) threw `NOT_FOUND` because the document didn't exist.

### Fix
`initUserProgress` uses `getDoc` + `setDoc` (upsert for new docs). In any code path where the document might not exist:

```typescript
// ✅ Always ensure doc exists BEFORE calling updateDoc
await initUserProgress(uid, { displayName, isAnonymous: false, avatarUrl });
// Now it is safe to call updateDoc
await updateDoc(ref, { discoveredCountries: merged, quizHighScore: merged });
```

**Rule:** Never call `updateDoc` on a path that might not have had `setDoc` called first. Use `setDoc({ merge: true })` if in doubt.

---

## 9. Firebase Auth — Reading User Identity vs. Firestore Progress

### Two Sources of Truth
| Data | Where to read from | Why |
|---|---|---|
| `displayName`, `photoURL` | Firebase `User` object (`user.displayName`, `user.photoURL`) | Synchronously updated when auth state changes. Avoids race with Firestore reads. |
| Game progress (countries, scores) | Firestore `users/{uid}` document | Auth object doesn't know about app-specific data. |
| `isAnonymous` | Firebase `User` object (`user.isAnonymous`) | Ground truth live from Auth SDK. |

**Never** derive display name/avatar for logged-in users from Firestore when the Firebase `User` object is available — Firestore reads are async and lose races with state updates.

---

## 10. Firebase Auth — `signInWithCredential` Leaves `displayName`/`photoURL` Null (CRITICAL)

### Problem
After the `credential-already-in-use` merge path (where `signInWithCredential` is called instead of `linkWithPopup`), the Firebase `User` object has:
```
user.displayName === null
user.photoURL    === null
```
This causes the avatar **not** to render and the display name to fall back to the pseudonym.

### Root Cause
Firebase Auth internally uses two different code paths:
- **`linkWithPopup`** immediately updates the top-level `user.displayName` / `user.photoURL` from the Google OAuth response.
- **`signInWithCredential`** (used in the credential-already-in-use fallback) does **not** always populate these top-level fields. The canonical Google profile data is only stored inside `user.providerData[0]` (where `providerId === "google.com"`).

This is a Firebase SDK behavior difference, not a bug per se.

### Fix — Always check `user.providerData`

In any code that reads a logged-in user's identity, check `providerData` as a fallback:

```typescript
// ✅ CORRECT — providerData fallback for signInWithCredential path
const googleProvider = user.providerData.find((p) => p.providerId === "google.com");

const displayName =
  user.displayName ??
  googleProvider?.displayName ??
  user.email?.split("@")[0] ??
  "Explorer";

const photoURL =
  user.photoURL ??
  googleProvider?.photoURL ??
  null;
```

```typescript
// ❌ WRONG — fails when signInWithCredential was used
const displayName = user.displayName ?? "Explorer";  // null for Google accounts in merge path
const photoURL    = user.photoURL    ?? null;         // null for Google accounts in merge path
```

Also apply this when saving to Firestore:
```typescript
const googleProviderData = googleResult.user.providerData.find(
  (p) => p.providerId === "google.com"
);
const displayName = googleResult.user.displayName ?? googleProviderData?.displayName ?? null;
const photoURL    = googleResult.user.photoURL    ?? googleProviderData?.photoURL    ?? null;
```

### Confirmed in this codebase
`linkAnonymousWithGoogle` in `src/lib/firebase.ts` and `AuthProvider.tsx` both now use this pattern.

---

## How to Update This File

After resolving a bug or identifying a non-obvious technical constraint:

1. Add a new numbered section.
2. Follow the structure: **Problem → Root Cause → Fix** with code examples.
3. Commit with: `docs: update key_technical_points.md — [topic]`
