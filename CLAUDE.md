# CLAUDE.md

Marketing one-pager for the **Fire Watch** agent (the agent itself lives in the
sibling repo `Abilityai/fire-watch`). Describes the briefing service — data
sources, method, value — links the bundled example report, and tells visitors
how to request their own briefing via Telegram.

## Quick Start

**Stack:** Next.js 16 (App Router), TypeScript, Tailwind CSS v4 (CSS-first config)

**Commands:**
- `npm run dev` — dev server at localhost:3000
- `npm run build` — production build
- `npm run lint` — ESLint

## Project Structure

- `app/` — layout (fonts, metadata, header/footer), one-page homepage, sitemap/robots/404
- `components/home/` — the page sections: hero, report, sources, method, flow (request + contact)
- `components/layout/` — header (sticky, anchor nav, mobile menu), footer (disclaimer + attribution)
- `components/ui/` — button, container, section primitives
- `content/` — ALL editable copy as JSON (`site.json`, `home.json`)
- `lib/site-data.ts` — typed wrapper over the content JSON; components import from here
- `public/example-report/` — the bundled real briefing (static HTML + map asset), served at `/example-report` via a rewrite in `next.config.ts`

## Design System

Warm Professional with the report's ember accent — tokens in `app/globals.css`
(`:root` variables mapped through Tailwind v4 `@theme inline`): cream page
`#faf7f2`, white cards, warm ink `#29221b`, ember `#b85050`, four level colors
(green/yellow/orange/red). Fonts: DM Sans + JetBrains Mono via `next/font`.
There is **no `tailwind.config.ts`** — Tailwind v4 is configured in CSS.

## Content Management

Edit `content/site.json` / `content/home.json` and redeploy — no component
changes needed. Notably:

- **Telegram handle is a placeholder.** `content/site.json` →
  `contact.telegram`: set the real `handle` and set `url`
  (e.g. `https://t.me/...`) to turn the static chip into a live link.
- `siteConfig.url` must match the production domain (used by metadata,
  sitemap, robots).

## Updating the example report

Replace `public/example-report/index.html` + `assets/` with a newer briefing
from the agent repo, and re-point the map `src` to
`/example-report/assets/...` (absolute path — the page is served at
`/example-report` without a trailing slash, so relative paths break).

## Deploy

`vercel --prod` from this directory, or push to `main` if the repo is
connected to Vercel.
