import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from "@astrojs/mdx";
import netlify from "@astrojs/netlify/functions";
//import netlify from "@astrojs/netlify"; //for local server deploy uncomment this and comment top

import react from "@astrojs/react";
import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx(), react(), svelte()],

  experimental: {
    assets: true
  },
  output: "server",
  adapter: netlify()
});