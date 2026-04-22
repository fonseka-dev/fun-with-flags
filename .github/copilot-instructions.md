# Explorer's Atlas — Copilot Instructions

## Project Overview

**Explorer's Atlas** is a responsive educational web app for children to learn world flags, capitals, and cultural facts. It covers 195 countries across four pages: dashboard, catalog, "Guess the Flag" quiz, and an interactive SVG world map.

- **Repo:** https://github.com/fonseka-dev/fun-with-flags
- **Deploy:** Vercel (auto-deploys `main`)
- **Docs:** `docs/project_documentation.md`
- **Maps documentation:** `docs/maps_documentation.md`

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript (strict mode) |
| Styling | Tailwind CSS v4 |
| Auth & DB | Firebase (Anonymous Auth, Google Sign-In, Firestore) |
| i18n | next-intl (EN / ES) — locale prefix via `[locale]` segment |
| Testing | Vitest + Testing Library (jsdom) |
| Hosting | Vercel |

## Architecture

```
src/
├── app/[locale]/     # Next.js App Router pages — all routes are locale-prefixed
├── components/       # Reusable UI (auth/, catalog/, country/, games/, layout/, map/, ui/)
├── data/             # Static data and shared types (types.ts is the source of truth)
├── i18n/             # next-intl config (routing, request, navigation)
├── lib/
│   ├── firebase.ts   # Firebase client init
│   ├── hooks/        # Custom React hooks (useGameState, useUserProgress, …)
│   ├── providers/    # Context providers (AuthProvider, CountriesProvider)
│   └── utils/        # Pure utility functions (countries.ts, quiz.ts)
messages/             # i18n translation files (en.json, es.json)
scripts/              # One-off data seeding scripts (not part of the app bundle)
```

## Conventions

### TypeScript
- Strict mode is enabled — no `any`, no type assertions without justification.
- All shared types live in `src/data/types.ts`. Add new shared types there, not inline.
- Use named exports for components, hooks, and utilities. No default exports except Next.js page/layout files.

### React / Next.js
- Server Components by default. Add `"use client"` only when the component needs browser APIs, state, or effects.
- All pages and layouts under `app/[locale]/` are automatically locale-aware via next-intl. Use `useTranslations` for any user-visible string — never hardcode English text in JSX.
- Use `Link` and `redirect` from `@/i18n/navigation`, not from `next/navigation`, to preserve locale routing.
- Path alias `@/` maps to `src/`.

### Styling
- Tailwind CSS v4 utility classes only. No CSS modules, no inline styles.
- Use `material-symbols-outlined` for icons (already loaded globally).

### State & Data
- Game logic lives in `useGameState`. Country filtering lives in `lib/utils/countries.ts`.
- Firestore reads/writes go through providers or hooks — never directly inside components.

### i18n
- Two locales: `en` (default) and `es`.
- Translation keys live in `messages/en.json` and `messages/es.json`. Both files must be updated together.

### Testing
- Tests live in `src/__tests__/` mirroring the `src/` structure.
- Use Vitest + Testing Library. Run with `npm test`.
- Pure utility functions (hooks, utils) should have unit tests. UI component tests are optional.

## Build & CI

```bash
npm run dev      # Local dev server
npm run build    # Production build
npm run lint     # ESLint
npm test         # Vitest (single run)
```

CI runs lint → test → build on every PR targeting `main`. All three must pass before merging.

## Branching & Worktree Workflow

- Branch names: `feat/<topic>`, `fix/<topic>`, `chore/<topic>`
- Commit style: Conventional Commits — `feat(quiz): add timer mode`
- Never push directly to `main`.
- **The user always stays on `main`** — all development happens in isolated git worktrees under `.worktrees/`.
  Every new feature, bug fix, or chore gets its own worktree + branch created automatically. The user never needs to switch branches manually.

### Post-Merge Cleanup (REQUIRED after every PR merge)

After merging a PR, always run these steps and confirm in chat:

```bash
git worktree remove .worktrees/<branch-name>   # remove local worktree
git checkout main
git pull                                        # bring main up to date
npm test                                        # confirm all tests still pass
```

Then report: "Merged. `main` is up to date. Tests passing (N/N)."

## GitHub Project — Work Item Management

All work tracked in the **Fun-With-Flags** GitHub Project:
- **Project:** https://github.com/users/fonseka-dev/projects/2/views/1
- **Project ID:** `PVT_kwHOCx1H8s4BU2gj`
- **Repo:** `fonseka-dev/fun-with-flags`

### Rules

- **Every bug, feature, and task gets a GitHub Issue** linked to the project. No exceptions.
- **Create the issue before starting work**, not after.
- **Keep status current** — update as work progresses.
- Use `gh` CLI (already authenticated as `fonseka-dev`) for all project operations.

### Mandatory Pre-Code Checklist

**Before writing or modifying any code**, you MUST:

1. Check whether a GitHub Issue already exists for this work.
2. If not, create one with `gh issue create` and add it to the project.
3. Set Status → `In progress` on the project item.
4. Create a worktree + branch (`feat/<topic>`, `fix/<topic>`, `chore/<topic>`).
5. Only then begin implementation.

This applies to every interaction — new features, bug fixes, refactors, chores, and one-liners. No exceptions. If a user asks a purely informational question with no code change, skip this checklist.

### Status Flow

`Backlog` → `Ready` → `In progress` → `In review` → `Done`

| Status | When |
|---|---|
| Backlog | Identified but not yet prioritized |
| Ready | Scoped and ready to start |
| In progress | Actively being worked on |
| In review | PR open, awaiting merge |
| Done | Merged to `main` |

### Field IDs (for `gh project item-edit`)

| Field | Field ID | Options |
|---|---|---|
| Status | `PVTSSF_lAHOCx1H8s4BU2gjzhFxw2U` | Backlog `f75ad846`, Ready `61e4505c`, In progress `47fc9ee4`, In review `df73e18b`, Done `98236657` |
| Priority | `PVTSSF_lAHOCx1H8s4BU2gjzhFx8IE` | P0 `79628723`, P1 `0a877460`, P2 `da944a9c` |
| Size | `PVTSSF_lAHOCx1H8s4BU2gjzhFx8Ig` | XS `6c6483d2`, S `f784b110`, M `7515a9f1`, L `817d0097`, XL `db339eb2` |

### CLI Recipe

```bash
# 1. Create issue and capture URL
ISSUE_URL=$(gh issue create \
  --repo fonseka-dev/fun-with-flags \
  --title "feat(scope): short description" \
  --body "..." \
  --label "bug|enhancement|chore")

# 2. Add to project, capture item ID
ITEM_ID=$(gh project item-add 2 --owner fonseka-dev --url "$ISSUE_URL" --format json | jq -r '.id')

# 3. Set fields
gh project item-edit --project-id PVT_kwHOCx1H8s4BU2gj --id "$ITEM_ID" \
  --field-id PVTSSF_lAHOCx1H8s4BU2gjzhFxw2U --single-select-option-id <STATUS_ID>
gh project item-edit --project-id PVT_kwHOCx1H8s4BU2gj --id "$ITEM_ID" \
  --field-id PVTSSF_lAHOCx1H8s4BU2gjzhFx8IE --single-select-option-id <PRIORITY_ID>
gh project item-edit --project-id PVT_kwHOCx1H8s4BU2gj --id "$ITEM_ID" \
  --field-id PVTSSF_lAHOCx1H8s4BU2gjzhFx8Ig --single-select-option-id <SIZE_ID>
```

### Usage of Skills

- Always use the Skill that best fits the task. For example:
  - new feature: `brainstorming` → `using-git-worktrees` → `writing-plans` → `executing-plans` → `verification-before-completion` → `requesting-code-review`
  - bug fix: `systematic-debugging` → `test-driven-development` → `verification-before-completion` → `requesting-code-review`
  - Received review feedback: `receiving-code-review` → `fix` → `verification-before-completion`