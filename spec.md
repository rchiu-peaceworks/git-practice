# Spec

What the site is before any code gets touched. Scope: Tokyo only (see `niche.md`).

## Pages

1. **Home / Browse** (`/`) — grid or list of all 15 places from `shortlist.md`. Each card shows name, area, and discipline. Filterable by discipline. Clicking a card goes to that place's page.
2. **Place page** (`/places/[slug]`, 15 total) — one page per restaurant, showing all place-entry fields below, plus a link that opens the restaurant in Google Maps.
3. **About / Niche** (`/about`) — explains the goal: why this list exists, the inclusion test from `niche.md` (single discipline, 15+ years under one chef/lineage, local regulars not tourists), and who it's for.

## Place-entry fields

Each place (source of truth: `shortlist.md`) has:

- **Name** (English, with Japanese name where available)
- **Area** — Tokyo neighborhood (e.g. Ueno, Nihonbashi, Asakusa)
- **Discipline** — the one thing they do (e.g. "Unagi only," "Soba only")
- **Why the craft is notable** — the history/lineage blurb
- **Source** — the link the research was pulled from
- **Google Maps link** — a Google Maps search URL for the restaurant name + area, so a click takes the visitor straight to directions
- **Opening hours** — not yet in `shortlist.md`; needs to be researched per place when the data gets structured (Task 13)
- **Dish background** — short history of the dish/discipline itself (e.g. where unagi kabayaki or Edomae sushi came from), not just the restaurant's own history
- **Etiquette notes** — any "hidden rules" a visitor should know for that dish (e.g. no double-dipping the sauce on kushikatsu). Optional per place — only include where a real rule exists, not filler

## Browse / filter behaviour

- Default view: all 15 places, grouped or sorted however reads cleanest (e.g. by area or discipline).
- Filter by **discipline** — one-click filter down to just unagi places, just ramen places, etc. (9 disciplines currently: unagi, sushi, tonkatsu, ramen, tempura, soba, kappo/kaiseki, yakitori, sukiyaki).
- No search box or price filter for now — 15 places doesn't need it yet; revisit if the list grows.

**Done when:** this file describes the pages, the place-entry fields, and the browse/filter behaviour. ✅
