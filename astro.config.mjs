import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from "@astrojs/preact";
import netlify from '@astrojs/netlify/functions';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), preact(), mdx()],
  experimental: {
    assets: true
  },
  output: 'server',
  adapter: netlify(),
});