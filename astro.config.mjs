import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  site: 'https://jsnape.github.io',
  redirects: {
    '/posts': '/posts/1'
  },
  integrations: [tailwind(), svelte(), mdx()]
});