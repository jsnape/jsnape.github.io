<script lang="ts">
    declare function consentGranted(): void;
    declare function getCookieConsent(): string;

    import { onMount } from "svelte";

    let cookies = "unk";
    let isMounted = false;
    export let CookieConsent = "denied";

    const handleAccept = () => {
        cookies = "granted";

        // accepted cookie lasts for a year
        let d = new Date();
        let oneYear = new Date(d.getFullYear() + 1, d.getMonth(), d.getDate());

        document.cookie = "cookie-consent=granted; expires=" + oneYear + "; path=/";
        CookieConsent = "granted";
        consentGranted();
    };

    const handleDecline = () => {
        cookies = "denied";
        CookieConsent = "denied";
        // declined cookie only lasts for the session
        document.cookie = "cookie-consent=denied; path=/";
    };

  // this waits to load the cookie banner until the component is mounted
  // so that there is not a component flash
  onMount(() => {
        isMounted = true;
        // get cookie approval after component is mounted
        cookies = getCookieConsent();
    });

</script>

<!-- if there is no cookie for "cookie-consent", display the banner -->
{#if isMounted}
    <div
    id="cookie-banner"
    class={`${
        cookies === "granted" || cookies === "denied" ? "hidden" : ""
    } fixed bottom-0 right-0 z-50 m-2 max-w-screen-sm rounded-lg border-2 border-slate-300 bg-purple-50 text-slate-800 shadow-xl`}
    >
    <div class="p-4 text-center">
        <p class="mb-4 text-sm sm:text-base">
        We use cookies to analyze our website and make your experience even
        better. To learn more, see our{" "}
        <a
            class="text-blue-600 underline hover:text-blue-700"
            href="/privacy/"
            target="_blank"
        >
            Privacy Policy.
        </a>
        </p>

        <div class="mx-auto">
        <button
            class="rounded-md bg-blue-600 p-2 text-white transition hover:bg-blue-700"
            on:click={handleAccept}
        >
            Accept
        </button>
        <button
            class="ml-2 rounded-md bg-transparent p-2 text-slate-600 transition hover:bg-gray-200"
            on:click={handleDecline}
        >
            Decline
        </button>
        </div>
    </div>
    </div>
{/if}
