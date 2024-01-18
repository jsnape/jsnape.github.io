import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://snape.me',
  redirects: {
    '/posts': '/posts/1',
    '/feed': '/rss.xml',
    '/resume': '/experience/',
  },
  integrations: [tailwind(), svelte(), mdx(), sitemap(), robotsTxt(),
		partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),]
});
