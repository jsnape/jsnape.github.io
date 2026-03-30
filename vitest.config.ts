import { defineConfig } from 'vitest/config';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { fileURLToPath, URL } from 'node:url';

export default defineConfig({
    plugins: [svelte()],
    test: {
        environment: 'jsdom',
        globals: true,
        setupFiles: ['./test/setup.ts'],
        restoreMocks: true,
        exclude: ['**/node_modules/**', '**/test/e2e/**'],
    },
    resolve: {
        conditions: ['browser'],
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@layouts': fileURLToPath(new URL('./src/layouts', import.meta.url)),
            '@components': fileURLToPath(new URL('./src/components', import.meta.url)),
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),
        },
    },
});
