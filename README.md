# personal-website

A high-end, product-style landing page — dark minimalist-brutalist aesthetic, bento-box grid, bold typography, and premium micro-interactions. All copy is driven by `content.md`.

## Stack

- **Next.js 15** (App Router)
- **Tailwind CSS 3.4** — custom dark "ink/paper" theme
- **framer-motion** — entrance animations, hover lift, cursor-tracking spotlight
- **gray-matter** — parses `content.md` frontmatter into the site

## Project layout

```
content.md            YAML frontmatter (hero + bento data) drives the site
lib/content.ts        reads content.md with gray-matter (server-side)
app/
  layout.tsx          fonts + metadata
  page.tsx            server component: parses content, renders Hero + BentoGrid
  globals.css         dark base + blueprint-grid backdrop
components/
  Hero.tsx            oversized animated headline
  BentoGrid.tsx       dense responsive 3-col grid
  BentoCard.tsx       bento boxes with spotlight + hover micro-interactions
```

## Develop

```bash
npm install
npm run dev          # http://localhost:3000
```

## Edit the content

Everything on the page comes from the frontmatter in `content.md` — edit the `hero` block and the `bento` items (each takes `title`, `kicker`, and either `body` or `tags`, plus an optional `size` of `normal | wide | tall | feature` and `accent: true` for the inverted box).

## Build / deploy

```bash
npm run build        # static export to ./out
```

`next.config.mjs` sets `output: "export"`, so the build produces a fully static site in `out/` that can be hosted anywhere, including GitHub Pages.
