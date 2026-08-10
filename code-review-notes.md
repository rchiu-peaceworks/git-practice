# Code Review Notes

Ran `/code-review` against the latest commit (Task 17, individual place pages). It reviewed the diff, traced how the changed files were actually used elsewhere in the app, checked the code against the Next.js 16 docs bundled in `node_modules`, and ran `tsc --noEmit`.

## What it caught that I would have missed

**1. The language toggle silently broke across navigation.**

Task 16 added an EN/中文 toggle. Task 17 added individual place pages, each wrapped in its own `<LanguageProvider>`. I tested each feature in isolation and both worked — the toggle worked on the browse page, the place pages rendered correctly in both languages when loaded directly. What I didn't test was the actual user path: toggle to Chinese on the browse page, then *click into a place*. Because each route mounted a fresh provider (defaulting to English) and the internal links were plain `<a href>` tags (a full page reload, which wipes any client state regardless of where the provider sits), the language silently reset to English the moment you navigated. Both pieces had to be fixed together — moving `LanguageProvider` up to the root layout alone wouldn't have helped, since a hard `<a>` reload still nukes the React tree.

This is exactly the kind of gap the task description warned about: each piece looked done when checked on its own, and the failure only shows up in the seam between two features I built in separate sessions.

**2. Opening hours never actually translated.**

The Chinese translation work (Task 16) covered area, the one thing, why notable, dish background, and etiquette — but I never added hours to the translation object, so the detail page's "營業時間" (Hours) heading was followed by an English-only string like "Closed Mondays." I'd mentally filed hours as "just numbers, doesn't need translating" and didn't reconsider that closed-day notation and "L.O." abbreviations are still English text under a Chinese heading — a real mixed-language artifact, not just numerals.

## Fixes applied

- Moved `LanguageProvider` to `app/layout.tsx` so there's a single instance for the whole app instead of one per route.
- Replaced the internal `<a href="/places/...">` and `<a href="/">` links with `next/link`'s `<Link>` so navigation is client-side and doesn't reload the page.
- Added a `hours` field to `PlaceTranslation` and translated it for all 15 places; the detail page now reads `t.hours` (language-aware) instead of `place.hours` (English-only).

**Done when:** this file exists and the issues raised are fixed. ✅
