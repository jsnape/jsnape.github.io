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
    '/resume': '/experience/',
  },
  integrations: [tailwind(), svelte(), mdx(), sitemap(),
    robotsTxt({
      policy: [
        {
          userAgent: 'CCBot',
          allow: '/',
        },
        {
          userAgent: 'ChatGPT-User',
          allow: '/',
        },
        {
          userAgent: 'GPTBot',
          allow: '/',
        },
        {
          userAgent: 'Google-Extended',
          allow: '/',
        },
        {
          userAgent: 'anthropic-ai',
          allow: '/',
        },
        {
          userAgent: 'ClaudeBot',
          disallow: '/',
        },
        {
          userAgent: 'Omgilibot',
          disallow: '/',
        },
        {
          userAgent: 'Omgili',
          disallow: '/',
        },
        {
          userAgent: 'FacebookBot',
          disallow: '/',
        },
        {
          userAgent: 'Diffbot',
          disallow: '/',
        },
        {
          userAgent: 'Bytespider',
          disallow: '/',
        },
        {
          userAgent: 'ImagesiftBot ',
          disallow: '/',
        },
        {
          userAgent: 'cohere-ai',
          disallow: '/',
        },
      ],
    }),
		partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),]
});
