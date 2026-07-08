// @ts-check
import { defineConfig } from 'astro/config';

// Static build — Cloudflare Pages serves ./dist directly, no worker needed.
// https://astro.build/config
export default defineConfig({
  site: 'https://wolfandcrow.tech',
});
