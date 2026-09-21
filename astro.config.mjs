import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  // GitHub Actions proporciona la dirección y subcarpeta reales de Pages.
  site: process.env.PAGES_SITE || 'http://localhost:4321',
  base: process.env.PAGES_BASE || '/',
  trailingSlash: 'never',
  integrations: [tailwind(), sitemap()],
});
