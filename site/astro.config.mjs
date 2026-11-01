import { defineConfig } from 'astro/config';

export default defineConfig({
  // Prefer the working Vercel alias until onthewheels.in nameservers resolve
  site: 'https://onthewheels-site.vercel.app',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
