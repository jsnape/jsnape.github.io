import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { render, fireEvent, screen, waitFor } from '@testing-library/svelte';
import CookieConsent from '@components/CookieConsent.svelte';

// Cast to any to work around Svelte 5 type incompatibility with @testing-library/svelte
const CookieConsentComponent = CookieConsent as any;

beforeEach(() => {
    // Provide the globals the component declares with `declare function`
    vi.stubGlobal('getCookieConsent', vi.fn().mockReturnValue('unk'));
    vi.stubGlobal('consentGranted', vi.fn());
    // Start each test with a clean cookie jar
    document.cookie = 'cookie-consent=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/';
});

afterEach(() => {
    vi.unstubAllGlobals();
});

describe('CookieConsent', () => {
    it('shows the banner when consent is unknown after mount', async () => {
        (globalThis as any).getCookieConsent = vi.fn().mockReturnValue('unk');
        render(CookieConsentComponent);

        await waitFor(() => {
            const banner = document.getElementById('cookie-banner');
            expect(banner).toBeInTheDocument();
            expect(banner).not.toHaveClass('hidden');
        });
    });

    it('hides the banner when consent is already granted', async () => {
        (globalThis as any).getCookieConsent = vi.fn().mockReturnValue('granted');
        render(CookieConsentComponent);

        await waitFor(() => {
            const banner = document.getElementById('cookie-banner');
            expect(banner).toHaveClass('hidden');
        });
    });

    it('hides the banner when consent is already denied', async () => {
        (globalThis as any).getCookieConsent = vi.fn().mockReturnValue('denied');
        render(CookieConsentComponent);

        await waitFor(() => {
            const banner = document.getElementById('cookie-banner');
            expect(banner).toHaveClass('hidden');
        });
    });

    it('clicking Accept writes a cookie-consent=granted cookie', async () => {
        render(CookieConsentComponent);
        await waitFor(() => expect(document.getElementById('cookie-banner')).toBeInTheDocument());

        fireEvent.click(screen.getByRole('button', { name: /accept/i }));

        await waitFor(() => {
            expect(document.cookie).toContain('cookie-consent=granted');
        });
    });

    it('clicking Accept calls consentGranted()', async () => {
        render(CookieConsentComponent);
        await waitFor(() => expect(document.getElementById('cookie-banner')).toBeInTheDocument());

        fireEvent.click(screen.getByRole('button', { name: /accept/i }));

        await waitFor(() => {
            expect((globalThis as any).consentGranted).toHaveBeenCalledOnce();
        });
    });

    it('clicking Accept hides the banner', async () => {
        render(CookieConsentComponent);
        await waitFor(() => expect(document.getElementById('cookie-banner')).toBeInTheDocument());

        fireEvent.click(screen.getByRole('button', { name: /accept/i }));

        await waitFor(() => {
            expect(document.getElementById('cookie-banner')).toHaveClass('hidden');
        });
    });

    it('clicking Decline writes a cookie-consent=denied cookie', async () => {
        render(CookieConsentComponent);
        await waitFor(() => expect(document.getElementById('cookie-banner')).toBeInTheDocument());

        fireEvent.click(screen.getByRole('button', { name: /decline/i }));

        await waitFor(() => {
            expect(document.cookie).toContain('cookie-consent=denied');
        });
    });

    it('clicking Decline does NOT call consentGranted()', async () => {
        render(CookieConsentComponent);
        await waitFor(() => expect(document.getElementById('cookie-banner')).toBeInTheDocument());

        fireEvent.click(screen.getByRole('button', { name: /decline/i }));

        await waitFor(() => {
            expect((globalThis as any).consentGranted).not.toHaveBeenCalled();
        });
    });
});
