import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://rosetolotus.github.io',
  base: '/',
  integrations: [react()], // Removed tailwind() from here
  vite: {
    plugins: [tailwindcss()], // Added tailwindcss to Vite plugins
  },
  output: 'static',
});