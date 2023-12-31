import preact from '@astrojs/preact';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import { defineConfig } from 'astro/config';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind({
    configFile: './tailwind.config.ts'
  }), preact({
    compat: true
  })],
  output: 'server',
  adapter: node({
    mode: "standalone"
  })
});