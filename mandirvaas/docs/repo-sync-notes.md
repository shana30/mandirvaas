# Repo Sync & Structure Review — Luckshana

## Sync

```
$ git checkout main
$ git pull origin main
$ git checkout feat/luckshana-experience
$ git merge main
```

Local `main` is at `d67d065` ("merge: integrate experience routes into main").
`feat/luckshana-experience` is merged up to date with `main` as of this
entry — no divergence, clean working tree.

> Note: this workspace doesn't have an `origin` remote configured yet
> (single-developer sandbox). Once the shared remote is provisioned, this
> same sequence (`checkout main` → `pull origin main` → `checkout
> feat/luckshana-experience` → `merge main`) is the daily-sync routine to
> run every morning before writing code, per the team git rules.

## Structural Review — Where Acquisition/Experience Pages Live

```
src/
  App.jsx                    → route table, both tracks' routes registered here
  index.css                  → shared design tokens (palette, type, buttons, cards)
  pages/
    Home.jsx                 → mine — mounts Hero.jsx
    Tours.jsx                → mine — tour package listing (stub)
    Blogs.jsx                → mine — blog post listing (stub)
    Temples.jsx               → Dhanush's
    TempleMap.jsx              → Dhanush's
    Stays.jsx / Stays.css      → Dhanush's
  components/
    home/
      Hero.jsx / Hero.css     → mine — headline + search bar, mounted in Home.jsx
docs/
  architecture-why-react.md  → Dhanush's Day 1 rationale doc
  repo-sync-notes.md          → this file
```

**Where my future acquisition pages will land:**
- New pages go in `src/pages/`, one file per route, same pattern as `Tours.jsx`/`Blogs.jsx`.
- Reusable pieces (hero variants, deity selectors, card layouts) go in `src/components/`,
  organized by feature area the way `components/home/` is organized now.
- Route registration happens in `App.jsx` — I only add `<Route>` entries under the
  "Luckshana's routes" comment block to avoid touching Dhanush's route group.
- Shared visual primitives (buttons, cards, tokens) live in `src/index.css` — I extend
  these rather than duplicating styles per page.
