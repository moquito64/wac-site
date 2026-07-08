# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal site for Sebastian Javier Blanchette (aliases: wolf, moquito64) — IT specialist / systems administrator / programmer. Built with Astro as a **fully static** build (no adapter) and deployed to Cloudflare Pages (free tier): build command `npm run build`, output directory `dist`. This used to be the "Wolf and Crow IT Consulting" business site; the business framing is retired.

## Design intent (important — read before touching content or styles)

The owner explicitly does NOT want a generic developer portfolio. The direction is: modern brutalism + dark academia + Scandinavian minimalism; "ancient libraries meeting futuristic operating systems"; Linear/Raycast/Obsidian-level polish. The site should feel calm, precise, deep, and crafted.

- **No** flashy gradients, loud animations, neon/cyberpunk clichés, or Tailwind-template genericism.
- Typography: elegant serif headings (EB Garamond), modern sans body (Inter), JetBrains Mono for marginalia/labels. Large whitespace, narrow readable measure (~41rem).
- Palette lives in `src/styles/global.css`: near-black ink background, warm off-white text, restrained brass (`--brass`) and starlight blue (`--starlight`) accents, hairline borders (`--hairline`). Use the tokens; don't add saturated colors.
- Symbolism, not decoration: the wolf, the crow, the mountain, the forest, the North Star, old maps, Latin phrases, manuscripts, mechanical watches, astronomy. Keep it subtle — small-caps Latin labels, roman-numeral section markers, star coordinates in the footer. Nothing cheesy.
- "Artist, programmer, brainiac, poet" is symbolic framing, not literal job titles. Actual work: IT specialist / sysadmin / programmer; free time: home labs, self-hosting, automation, sci-fi, poetry (blog: shrtstry.com).

## Commands

- `npm run dev` — dev server at `localhost:4321`
- `npm run build` — static build to `./dist/`
- `npm run preview` — preview the production build
- `npm run astro check` — type-check `.astro` files

No test suite or linter is configured.

## Architecture

- Single page: `src/pages/index.astro` holds all content — hero, About, Craft (numbered list rows), Symbols (2×2 hairline-bordered bestiary grid), Verse (poem), Correspondence footer — with scoped `<style>`.
- `src/layouts/Layout.astro` is the shared document shell: meta/OG tags, favicon, Google Fonts. Pages must wrap in this layout rather than emitting their own `<html>`.
- `src/styles/global.css` defines the design tokens (colors + font stacks) and base element styles.
- `src/assets/logo.png` (wolf-and-crow emblem) renders through `astro:assets` `<Image>` (optimized to webp at build).
- Contact: `mailto:sblanchette@wolfandcrow.tech` plus GitHub (moquito64), LinkedIn, shrtstry.com. No forms, no client-side JS.
