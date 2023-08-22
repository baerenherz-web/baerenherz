import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";
import preact from "@astrojs/preact";
import react from "@astrojs/react";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), preact(), react(), svelte()],
  experimental: {
    assets: true
  },
  output: "server",
  adapter: netlify()
});