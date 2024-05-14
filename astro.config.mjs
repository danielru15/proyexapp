import { defineConfig } from 'astro/config';
import vercelStatic from '@astrojs/vercel/static';
import vercel from '@astrojs/vercel/serverless';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config 
export default defineConfig({
    site: 'https://www.proyexapp.com',
    integrations: [sitemap()],
    output: 'server',
    adapter: vercel(),
  });