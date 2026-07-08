# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project overview

Personal profile site for Sebastian Javier Blanchette (aliases: wolf, moquito64) — presented as artist, programmer, brainiac, and poet. Built with Astro as a **fully static** build (no adapter) and deployed to Cloudflare Pages (free tier): build command `npm run build`, output directory `dist`. This used to be the "Wolf and Crow IT Consulting" business site; the business framing is retired — keep content personal, not corporate.

## Commands

- `npm run dev` — dev server at `localhost:4321`
- `npm run build` — static build to `./dist/`
- `npm run preview` — preview the production build
- `npm run astro check` — type-check `.astro` files

No test suite or linter is configured.

## Architecture

- Single page: `src/pages/index.astro` holds all content (hero, about, "Four Faces" facet cards, poem, contact footer) with scoped `<style>` for page styles.
- `src/layouts/Layout.astro` is the shared document shell: meta/OG tags, favicon, Google Fonts (Poppins for display, Cormorant Garamond for poetry, JetBrains Mono for aliases/code), and imports `src/styles/global.css`. Pages should always wrap in this layout rather than emitting their own `<html>`.
- `src/styles/global.css` defines the design tokens — Catppuccin Mocha palette as CSS custom properties (`--base`, `--mauve`, `--lavender`, etc.) plus `--font-display/serif/mono`. Use these variables; don't hardcode colors.
- Each facet card sets a per-card `--accent` custom property inline; card styles derive color from it.
- `src/assets/logo.png` (wolf-and-crow emblem) is rendered through `astro:assets` `<Image>`, which optimizes it to webp at build time.
- Contact is a plain `mailto:sblanchette@wolfandcrow.tech` link plus social links (github.com/moquito64, LinkedIn, shrtstry.com poetry blog) — no forms, no JS on the page.
