import { defineConfig } from 'astro/config';
import svelte from "@astrojs/svelte";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import partytown from '@astrojs/partytown';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://snape.me',
  redirects: {
    '/posts/1': '/posts',
    '/resume': '/experience/',
  },
  vite: {  
    plugins: [tailwindcss()],
  },
  integrations: [svelte(), mdx(), sitemap(), robotsTxt({
      policy: [
        {
          userAgent: 'CCBot',
          disallow: '/',
        },
        {
          userAgent: 'ChatGPT-User',
          disallow: '/',
        },
        {
          userAgent: 'GPTBot',
          disallow: '/',
        },
        {
          userAgent: 'Google-Extended',
          disallow: '/',
        },
        {
          userAgent: 'anthropic-ai',
          disallow: '/',
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
        {
          userAgent: '*',
          allow: '/',
        },],
    }),
		partytown({
			config: {
			  forward: ["dataLayer.push"],
			},
		}),]
});
