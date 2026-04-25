# Pet Directive — A Platform Brief

From collar tag to lifetime pet platform. A walkthrough for Cody.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fskylerseeg%2Fpet_directive_brief&project-name=pet-directive-brief&repository-name=pet-directive-brief)

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind · shadcn/ui (`new-york`) · framer-motion · lucide-react. Dark-only design system with sage as the single accent. Inter for body, Fraunces for display.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build    # production build
npm run start    # serve the built app
npm run lint     # eslint
npm run typecheck
```

## Project shape

```
app/                      # App Router entry (layout, page, globals.css, icon.svg)
components/
  SiteNav.tsx             # top nav + section dots + mobile rail
  ui/Section.tsx          # section wrapper (snap, padding, min-h-screen)
  ui/{button,card}.tsx    # shadcn primitives
  sections/*.tsx          # one component per pitch section
lib/
  content.ts              # typed pitch content (single source of truth)
  constants.ts            # SITE metadata
  utils.ts                # cn()
public/og.png             # 1200x630 share image
```

All section copy lives in `lib/content.ts` as a discriminated union — edit there, not in the components.

## Deploy

Click the button above, or:

1. Push to GitHub.
2. Import the repo in Vercel — it auto-detects Next.js and needs no env vars.
3. First deploy ships to a `*.vercel.app` URL; add a custom domain later if you want.

`vercel.json` pins the framework and build/install/dev commands so deploys are deterministic.
