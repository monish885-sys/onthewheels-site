import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://onthewheels.in',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});
