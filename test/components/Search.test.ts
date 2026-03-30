import { describe, it, expect, beforeEach, vi } from 'vitest';
import { render, fireEvent, screen } from '@testing-library/svelte';
import Search from '@components/Search.svelte';

// Cast to any to work around Svelte 5 type incompatibility with @testing-library/svelte
const SearchComponent = Search as any;

beforeEach(() => {
    // Replace window.location with a writable mock so we can inspect href changes
    vi.stubGlobal('location', { href: '' });
});

describe('Search', () => {
    it('renders the search input and submit button', () => {
        render(SearchComponent, { site: 'snape.me' });
        expect(screen.getByPlaceholderText('Search with Bing')).toBeInTheDocument();
        // submit button uses a FontAwesome icon — query by type
        expect(document.querySelector('input[type="submit"]')).toBeInTheDocument();
    });

    it('redirects to Bing with the query and site on submit', () => {
        render(SearchComponent, { site: 'snape.me' });
        const input = screen.getByPlaceholderText('Search with Bing') as HTMLInputElement;
        input.value = 'kusto query';

        fireEvent.submit(document.getElementById('searchForm')!);

        expect(window.location.href).toContain('https://www.bing.com/search?q=');
        expect(window.location.href).toContain('site%3Asnape.me');
    });

    it('URL-encodes the search query', () => {
        render(SearchComponent, { site: 'snape.me' });
        const input = screen.getByPlaceholderText('Search with Bing') as HTMLInputElement;
        input.value = 'hello world & more';

        fireEvent.submit(document.getElementById('searchForm')!);

        expect(window.location.href).toContain(encodeURIComponent('hello world & more'));
    });

    it('appends the site prop as a site: search operator', () => {
        render(SearchComponent, { site: 'example.com' });
        const input = screen.getByPlaceholderText('Search with Bing') as HTMLInputElement;
        input.value = 'test';

        fireEvent.submit(document.getElementById('searchForm')!);

        expect(window.location.href).toContain('+site%3Aexample.com');
    });
});
