import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config 
export default defineConfig({
    site: 'https://www.proyexapp.com',
    integrations: [sitemap()],
    output: 'static',
    adapter: vercelStatic(),
  });