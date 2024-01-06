import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions"; //for local server deploy change to @astrojs/netlify
import preact from "@astrojs/preact";
import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), preact(), react(), svelte()],

  //for local server deploy comment out experimental section
  experimental: {
    assets: true
  },
  output: "server",
  adapter: netlify()
});