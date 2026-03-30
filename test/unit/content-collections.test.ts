import { describe, it, expect } from 'vitest';
import fs from 'fs';
import path from 'path';

// Helper to recursively find files matching a pattern
function findFiles(dir: string, pattern: RegExp): string[] {
    const results: string[] = [];
    
    if (!fs.existsSync(dir)) return results;
    
    const items = fs.readdirSync(dir, { withFileTypes: true });
    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            results.push(...findFiles(fullPath, pattern));
        } else if (pattern.test(item.name)) {
            results.push(fullPath);
        }
    }
    return results;
}

describe('Content Collections', () => {
    describe('posts collection', () => {
        it('includes .md files', () => {
            const files = findFiles('src/content/posts', /\.md$/);
            expect(files.length).toBeGreaterThan(0);
        });

        it('includes .mdx files', () => {
            const files = findFiles('src/content/posts', /\.mdx$/);
            expect(files.length).toBeGreaterThan(0);
        });

        it('includes posts from 2004 (oldest)', () => {
            const files = findFiles('src/content/posts/2004', /\.mdx?$/);
            expect(files.length).toBeGreaterThan(0);
        });

        it('includes posts from 2014', () => {
            const files = findFiles('src/content/posts/2014', /\.mdx?$/);
            expect(files.length).toBeGreaterThan(0);
        });

        it('includes posts from 2024', () => {
            const files = findFiles('src/content/posts/2024', /\.mdx?$/);
            expect(files.length).toBeGreaterThan(0);
        });

        it('includes posts from 2025 (newest)', () => {
            const files = findFiles('src/content/posts/2025', /\.mdx?$/);
            expect(files.length).toBeGreaterThan(0);
        });

        it('has posts spanning multiple decades', () => {
            const files = findFiles('src/content/posts', /\.mdx?$/);
            
            // Extract years from file paths
            const years = files.map(f => {
                const match = f.match(/posts[/\\](\d{4})[/\\]/);
                return match ? parseInt(match[1]) : null;
            }).filter(Boolean) as number[];
            
            const uniqueYears = [...new Set(years)].sort();
            
            // Should have posts from at least 5 different years
            expect(uniqueYears.length).toBeGreaterThanOrEqual(5);
            
            // Should span from 2004 to 2025
            expect(Math.min(...uniqueYears)).toBeLessThanOrEqual(2005);
            expect(Math.max(...uniqueYears)).toBeGreaterThanOrEqual(2024);
        });
    });

    describe('experience collection', () => {
        it('includes experience entries', () => {
            const files = findFiles('src/content/experience', /\.md$/);
            expect(files.length).toBeGreaterThan(0);
        });
    });
});
