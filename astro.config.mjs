// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Update `site` when the real domain is confirmed.
// Used by Astro.site for canonical URLs and OG tags.
export default defineConfig({
  site: 'https://tonnyblaire.dev',
  vite: {
    plugins: [tailwindcss()],
  },
});