import { describe, it, expect, afterEach, vi } from 'vitest';
import {
    sortBlogPosts,
    sortExperience,
    excludeDrafts,
    excludeInstagram,
    convertToAbsoluteUri,
} from '@/functions';

// --- helpers -----------------------------------------------------------

function makePost({
    postDate = '2023-01-01',
    draft = false,
    tags = [] as string[],
} = {}) {
    return {
        id: 'test',
        slug: 'test',
        collection: 'posts' as const,
        data: {
            title: 'Test Post',
            postDate: new Date(postDate),
            draft,
            tags,
            categories: [] as string[],
        },
    };
}

function makeExperience({ startDate = '2020-01-01' } = {}) {
    return {
        id: 'test',
        slug: 'test',
        collection: 'experience' as const,
        data: {
            title: 'Test Experience',
            startDate: new Date(startDate),
            skills: [] as string[],
            technologies: [] as string[],
            locationType: 'remote',
            employmentType: 'Full-time',
        },
    };
}

afterEach(() => {
    vi.unstubAllEnvs();
});

// --- sortBlogPosts -----------------------------------------------------

describe('sortBlogPosts', () => {
    it('returns empty array unchanged', () => {
        expect(sortBlogPosts([])).toEqual([]);
    });

    it('returns a single post unchanged', () => {
        const posts = [makePost()];
        expect(sortBlogPosts(posts as any)).toHaveLength(1);
    });

    it('places newest post first', () => {
        const posts = [
            makePost({ postDate: '2020-01-01' }),
            makePost({ postDate: '2023-06-15' }),
            makePost({ postDate: '2021-03-10' }),
        ];
        const sorted = sortBlogPosts(posts as any);
        expect(sorted[0].data.postDate.getFullYear()).toBe(2023);
        expect(sorted[2].data.postDate.getFullYear()).toBe(2020);
    });

    it('handles posts with equal dates without throwing', () => {
        const posts = [makePost({ postDate: '2023-01-01' }), makePost({ postDate: '2023-01-01' })];
        expect(() => sortBlogPosts(posts as any)).not.toThrow();
    });
});

// --- sortExperience ----------------------------------------------------

describe('sortExperience', () => {
    it('places newest start date first', () => {
        const entries = [
            makeExperience({ startDate: '2010-01-01' }),
            makeExperience({ startDate: '2022-03-01' }),
            makeExperience({ startDate: '2015-07-20' }),
        ];
        const sorted = sortExperience(entries as any);
        expect(sorted[0].data.startDate.getFullYear()).toBe(2022);
        expect(sorted[2].data.startDate.getFullYear()).toBe(2010);
    });

    it('handles entries with equal start dates without throwing', () => {
        const entries = [
            makeExperience({ startDate: '2020-01-01' }),
            makeExperience({ startDate: '2020-01-01' }),
        ];
        expect(() => sortExperience(entries as any)).not.toThrow();
    });
});

// --- excludeDrafts -----------------------------------------------------

describe('excludeDrafts', () => {
    it('(PROD) excludes a draft post', () => {
        vi.stubEnv('PROD', 'true');
        expect(excludeDrafts(makePost({ draft: true }) as any)).toBe(false);
    });

    it('(PROD) includes a published post with a past date', () => {
        vi.stubEnv('PROD', 'true');
        expect(excludeDrafts(makePost({ postDate: '2020-01-01', draft: false }) as any)).toBe(true);
    });

    it('(PROD) excludes a future-dated post', () => {
        vi.stubEnv('PROD', 'true');
        const future = new Date();
        future.setFullYear(future.getFullYear() + 1);
        expect(excludeDrafts(makePost({ postDate: future.toISOString() }) as any)).toBe(false);
    });

    it('(DEV) includes a draft post', () => {
        // In Vitest's default test environment, import.meta.env.PROD is false
        expect(excludeDrafts(makePost({ draft: true }) as any)).toBe(true);
    });

    it('(DEV) includes a future-dated post', () => {
        const future = new Date();
        future.setFullYear(future.getFullYear() + 1);
        expect(excludeDrafts(makePost({ postDate: future.toISOString() }) as any)).toBe(true);
    });
});

// --- excludeInstagram --------------------------------------------------

describe('excludeInstagram', () => {
    it('(PROD) excludes a post tagged instagram', () => {
        vi.stubEnv('PROD', 'true');
        expect(excludeInstagram(makePost({ tags: ['instagram'] }) as any)).toBe(false);
    });

    it('(PROD) excludes a draft post', () => {
        vi.stubEnv('PROD', 'true');
        expect(excludeInstagram(makePost({ draft: true }) as any)).toBe(false);
    });

    it('(PROD) includes a normal published post', () => {
        vi.stubEnv('PROD', 'true');
        expect(excludeInstagram(makePost({ tags: ['tech'], draft: false }) as any)).toBe(true);
    });

    it('(DEV) still excludes instagram-tagged posts', () => {
        vi.stubEnv('PROD', 'false');
        expect(excludeInstagram(makePost({ tags: ['instagram'] }) as any)).toBe(false);
    });

    it('(DEV) includes a draft post', () => {
        // In Vitest's default test environment, import.meta.env.PROD is false
        expect(excludeInstagram(makePost({ draft: true }) as any)).toBe(true);
    });
});

// --- convertToAbsoluteUri ----------------------------------------------

describe('convertToAbsoluteUri', () => {
    it('returns an already-absolute URL unchanged', () => {
        expect(convertToAbsoluteUri('https://example.com/image.png', 'https://snape.me')).toBe(
            'https://example.com/image.png',
        );
    });

    it('converts a root-relative path using the site URL', () => {
        expect(convertToAbsoluteUri('/images/photo.jpg', 'https://snape.me')).toBe(
            'https://snape.me/images/photo.jpg',
        );
    });

    it('converts a dot-relative path using the site URL and parent path', () => {
        expect(convertToAbsoluteUri('./photo.jpg', 'https://snape.me', '/2023/01/my-post')).toBe(
            'https://snape.me/2023/01/my-post/photo.jpg',
        );
    });

    it('strips a trailing slash from the site URL', () => {
        expect(convertToAbsoluteUri('/page', 'https://snape.me/')).toBe('https://snape.me/page');
    });

    it('strips a trailing slash from the parent path', () => {
        expect(convertToAbsoluteUri('./img.png', 'https://snape.me', '/2023/01/')).toBe(
            'https://snape.me/2023/01/img.png',
        );
    });

    it('handles a non-string site by calling toString()', () => {
        const siteUrl = new URL('https://snape.me');
        expect(convertToAbsoluteUri('/page', siteUrl as any)).toBe('https://snape.me/page');
    });

    it('handles a non-string path by calling toString()', () => {
        const path = { toString: () => '/2023/01/my-post' };
        expect(convertToAbsoluteUri('./img.png', 'https://snape.me', path as any)).toBe(
            'https://snape.me/2023/01/my-post/img.png',
        );
    });
});
