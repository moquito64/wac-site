# wolfandcrow.tech

Personal profile site of **Sebastian Javier Blanchette** (wolf, moquito64) —
artist, programmer, brainiac, poet.

A single-page, fully static [Astro](https://astro.build) site in the
Catppuccin Mocha palette. No frameworks, no client-side JS — just the hero,
an about section, four facet cards, a poem, and contact links.

- **Poetry blog:** [shrtstry.com](https://shrtstry.com)
- **GitHub:** [moquito64](https://github.com/moquito64)
- **LinkedIn:** [sebastianblanchette](https://www.linkedin.com/in/sebastianblanchette/)
- **Email:** sblanchette@wolfandcrow.tech

## Structure

```text
src/
├── layouts/Layout.astro    # document shell: meta/OG tags, fonts, global.css
├── pages/index.astro       # the entire site, styles scoped in-file
├── styles/global.css       # design tokens (Catppuccin colors, fonts)
└── assets/logo.png         # wolf-and-crow emblem, optimized via astro:assets
```

## Commands

| Command           | Action                                      |
| :---------------- | :------------------------------------------ |
| `npm install`     | Install dependencies                        |
| `npm run dev`     | Start dev server at `localhost:4321`        |
| `npm run build`   | Build the static site to `./dist/`          |
| `npm run preview` | Preview the production build locally        |

## Deploy

Hosted free on Cloudflare Pages: build command `npm run build`, output
directory `dist`. Pushing to `master` triggers a deploy.
