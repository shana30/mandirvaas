<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 90eda93e6743055ad33ebc1e831546e28b3bf3fe
# MandirVaas — Day 1 Scaffold

Route provisioning + layout skeletons for both tracks.

## Setup
```bash
npm install
npm run dev   # http://localhost:3000
```

## Routes
| Route | Page | Owner |
|---|---|---|
| `/` | Home (mounts `Hero.jsx`) | Luckshana |
| `/tours` | Tours | Luckshana |
| `/blogs` | Blogs | Luckshana |
| `/temples` | Temples | Dhanush |
| `/map` | Temple Map | Dhanush |
| `/stays` | Stays (sidebar filters + results grid) | Dhanush |

## Branches
- `feat/dhanush-logistics`
- `feat/luckshana-experience`

Both are branched from `main` and already contain their Day 1 commit.
<<<<<<< HEAD
=======
=======
# MandirVaas — Team Repo

Temple pilgrimage planning platform (React + Vite). One shared repo, two feature tracks.

## Setup

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build → dist/
```

## Track Assignments

| Track | Owner | Pages | Routes |
|---|---|---|---|
| Core Logistics & Operations | Dhanush | Temples, Temple Map, Stays, Shop | /temples, /temples/map, /stays, /shop |
| Acquisition, Media & Experience | Luckshana | Home (Deity Hero), Tour Packages, Blogs, Join as Partner | /, /packages, /blogs, /partner |

Shared code both tracks pull from — edit with care, coordinate changes in standup:
- src/App.jsx — route table
- src/components/Navbar.jsx, Footer.jsx — shell
- src/components/shared/ — PageHeader, GopuramDivider
- src/data/mockData.js — placeholder content until the API is live
- src/index.css — design tokens (colors, type, buttons, cards)

## Git Workflow

main is protected — no direct commits.

**Branches**
```bash
# Dhanush
git checkout -b feat/dhanush-logistics

# Luckshana
git checkout -b feat/luckshana-experience
```
Both branches already exist in this repo, checked out from main.

**Daily sync** (run every morning before writing code):
```bash
git checkout main
git pull origin main
git checkout feat/<your-branch>
git merge main
```

**Committing:** one commit per completed sub-task milestone, using the exact message format from your roadmap sheet, e.g.:
```bash
git commit -m "feat(temples): add deity filter chips to listing page"
```

**Merging to main:** open a PR from your feature branch into main, get one review, then merge. Don't merge your own PR into main directly.

## Design System

Tokens live in src/index.css:
- --mv-maroon / --mv-gold / --mv-vermilion — primary palette (sindoor, turmeric, marigold)
- --font-display (Yatra One), --font-body (Work Sans), --font-mono (JetBrains Mono, for prices/distances/codes)
- .mv-gopuram-divider — shared section divider (stepped tower silhouette), use between major sections instead of a plain <hr>
- .mv-btn-primary / .mv-btn-outline, .mv-card — reusable primitives

Each page folder has its own scoped .css file — keep page-specific styles there, keep shared primitives in index.css.
>>>>>>> 12c86fc69c54a28a8c922a2d6606e0fda1653ccf
>>>>>>> 90eda93e6743055ad33ebc1e831546e28b3bf3fe
