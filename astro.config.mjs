import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rosetolotus.github.io',
  base: '/',
  integrations: [
    react(),
    // Use Astro's Tailwind integration
    tailwind(),
  ],
  output: 'static',
});