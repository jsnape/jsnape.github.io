import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import Search from '@components/Search.svelte';

beforeEach(() => {
    // Replace window.location with a writable mock so we can inspect href changes
    vi.stubGlobal('location', { href: '' });
});

describe('Search', () => {
    it('renders the search input and submit button', () => {
        render(Search, { site: 'snape.me' });
        expect(screen.getByPlaceholderText('Search with Bing')).toBeInTheDocument();
        // submit button uses a FontAwesome icon — query by type
        expect(document.querySelector('input[type="submit"]')).toBeInTheDocument();
    });

    it('redirects to Bing with the query and site on submit', () => {
        render(Search, { site: 'snape.me' });
        const input = screen.getByPlaceholderText('Search with Bing') as HTMLInputElement;
        input.value = 'kusto query';

        fireEvent.submit(document.getElementById('searchForm')!);

        expect(window.location.href).toContain('https://www.bing.com/search?q=');
        expect(window.location.href).toContain('site%3Asnape.me');
    });

    it('URL-encodes the search query', () => {
        render(Search, { site: 'snape.me' });
        const input = screen.getByPlaceholderText('Search with Bing') as HTMLInputElement;
        input.value = 'hello world & more';

        fireEvent.submit(document.getElementById('searchForm')!);

        expect(window.location.href).toContain(encodeURIComponent('hello world & more'));
    });

    it('appends the site prop as a site: search operator', () => {
        render(Search, { site: 'example.com' });
        const input = screen.getByPlaceholderText('Search with Bing') as HTMLInputElement;
        input.value = 'test';

        fireEvent.submit(document.getElementById('searchForm')!);

        expect(window.location.href).toContain('+site%3Aexample.com');
    });
});
