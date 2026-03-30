import { test, expect } from '@playwright/test';

/**
 * Smoke tests — verify each major route loads without error.
 * Does not test content details, only that pages render successfully.
 */

const routes = [
    // Core pages
    { path: '/',            description: 'homepage' },
    { path: '/about',       description: 'about page' },
    { path: '/experience',  description: 'experience timeline' },
    { path: '/cv',          description: 'printable CV' },
    { path: '/privacy',     description: 'privacy policy' },
    { path: '/terms',       description: 'terms of service' },
    { path: '/disclaimer',  description: 'disclaimer' },

    // Blog listing & pagination
    { path: '/posts',       description: 'posts listing page 1' },
    { path: '/posts/2',     description: 'posts listing page 2' },

    // Blog post
    { path: '/2004/06/25/sprint-review-time', description: 'individual blog post' },

    // Year/month archives
    { path: '/2004',        description: 'year archive' },
    { path: '/2004/06',     description: 'year/month archive' },

    // Taxonomy
    { path: '/tag/scrum',       description: 'tag page' },
    { path: '/category/agile',  description: 'category page' },

    // Feeds & metadata
    { path: '/rss.xml',             description: 'RSS feed' },
    { path: '/sitemap-index.xml',   description: 'sitemap' },
    { path: '/robots.txt',          description: 'robots.txt' },
];

for (const { path, description } of routes) {
    test(`${description} (${path})`, async ({ page }) => {
        const response = await page.goto(path);
        expect(response?.status(), `${path} should return 200`).toBe(200);
    });
}

test('robots.txt blocks AI crawlers', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    const body = await response!.text();
    for (const bot of ['GPTBot', 'ClaudeBot', 'Google-Extended', 'ChatGPT-User']) {
        expect(body, `robots.txt should block ${bot}`).toContain(bot);
    }
});
