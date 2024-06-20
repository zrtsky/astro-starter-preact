import node from '@astrojs/node'
import preact from '@astrojs/preact'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      configFile: './tailwind.config.ts'
    }),
    preact({
      compat: true
    })
  ],
  output: 'server',
  adapter: node({
    mode: 'standalone'
  })
})
