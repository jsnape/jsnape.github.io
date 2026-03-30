# GitHub Copilot Instructions

## Project Overview

Personal blog and portfolio site for James Snape at https://snape.me. Built with **Astro** (static site generation), **Svelte** (interactive components), **Tailwind CSS v4 + DaisyUI**, and **TypeScript**. Deployed to GitHub Pages via GitHub Actions.

## Tech Stack

- **Framework**: Astro v6 (SSG) + Svelte v5 (client-side interactivity)
- **Styling**: Tailwind CSS v4, DaisyUI, `@tailwindcss/typography`
- **Language**: TypeScript (strict mode via `astro/tsconfigs/strict`)
- **Content**: Astro Content Collections (Markdown `.md` and MDX `.mdx`)
- **Code Highlighting**: Shiki with custom KQL grammar (`src/assets/kql.tmLanguage.json`)
- **Analytics**: Google Analytics via Partytown (off-main-thread)

## Project Structure

```
src/
  assets/         # Images, icons, custom KQL TextMate grammar
  components/     # Astro (.astro) and Svelte (.svelte) components
  content/
    posts/        # Blog posts organised by YYYY/MM/ folder structure
    experience/   # Professional experience/CV entries
  layouts/        # Page layout components (Base, Sidebar, Markdown, etc.)
  pages/          # Astro file-based routes (static + dynamic)
  scripts/        # Utility scripts
  styles/         # base.css — Tailwind imports + custom overrides
  consts.ts       # Site-wide constants
  content.config.ts  # Content collection schemas
  functions.ts    # Shared utility functions
public/           # Static assets served as-is
test/
  unit/           # Unit tests for src/functions.ts and other pure logic
  components/     # Svelte component tests (CookieConsent, Search)
  setup.ts        # @testing-library/jest-dom matchers registration
```

## Path Aliases (tsconfig.json)

Use these aliases in imports:

- `@/*` → `src/*`
- `@layouts/*` → `src/layouts/*`
- `@components/*` → `src/components/*`
- `@assets/*` → `src/assets/*`

## Content Collections

### Posts (`src/content/posts/`)

Frontmatter schema:

```yaml
title: string          # required
postDate: date         # required
draft: boolean         # optional — excluded from prod builds
description: string    # optional
image:                 # optional
  src: image
  alt: string
tags: string[]         # required
categories: string[]   # required
```

Posts are stored in `YYYY/MM/` subdirectories. The URL slug is derived from the file path. Use `.md` for plain content, `.mdx` when importing Astro/Svelte components.

### Experience (`src/content/experience/`)

Frontmatter schema:

```yaml
title: string
role: string
startDate: date
endDate: date          # omit for current roles
locationType: string   # default: "remote"
location: string
employmentType: string # default: "Full-time"
companyName: string
companyUrl: string
companyLogo:
  src: image
  alt: string
skills: string[]
technologies: string[]
```

## URL Structure

| Route | Pattern |
|---|---|
| Blog post | `/{year}/{month}/{slug}` |
| Archive by year | `/{year}` |
| Archive by year/month | `/{year}/{month}` |
| All posts (paginated) | `/posts/{page}` |
| By tag | `/tag/{tag}/{page}` |
| By category | `/category/{category}/{page}` |
| Experience timeline | `/experience` |
| Printable CV | `/cv` |

## Key Constants (`src/consts.ts`)

```ts
ITEMS_PER_PAGE = 5        // blog pagination
RECENT_POSTS_COUNT = 15   // homepage grid
HOME_PAGE_TITLE = 'Recent Posts'
```

## Shared Utility Functions (`src/functions.ts`)

- `sortBlogPosts()` — sort posts by date descending
- `sortExperience()` — sort experience by start date descending
- `excludeDrafts()` — filter draft and future-dated posts (relaxed in dev)
- `excludeInstagram()` — filter Instagram posts
- `convertToAbsoluteUri()` — resolve URLs for RSS feed

## Component Conventions

- **Astro components** (`.astro`) for static/server-rendered UI
- **Svelte components** (`.svelte`) only when client-side interactivity is needed (use `client:load`)
- Svelte 5 runes syntax (`$state`, `$props`, `$bindable`) for reactive state
- Keep client-side JavaScript minimal — only `Search.svelte` and `CookieConsent.svelte` are hydrated

## Layouts

| Layout | Use case |
|---|---|
| `BaseLayout.astro` | Root — header, hero, footer |
| `SidebarLayout.astro` | Blog listing pages (9+3 col grid) |
| `MarkdownPostLayout.astro` | Individual blog posts |
| `NoSidebarLayout.astro` | Full-width content pages |
| `BareLayout.astro` | Minimal single pages |

## Styling Guidelines

- Use **Tailwind utility classes** for layout and spacing
- Use **DaisyUI component classes** for interactive elements (buttons, badges, timeline, etc.)
- Use **`@tailwindcss/typography` prose classes** for rendered Markdown content
- Custom CSS goes in `src/styles/base.css` — wrap in `@layer` where appropriate
- Body font: **Atkinson Hyperlegible** (accessibility-focused)

## Build & Dev Commands

```bash
npm run dev      # Start dev server (astro dev)
npm run build    # Type-check then build (astro check && astro build)
npm run preview  # Preview production build
npm test         # Run all tests once (use before committing)
npm run test:watch  # Run tests in watch mode during development
```

## Testing

**Framework**: [Vitest](https://vitest.dev/) + [@testing-library/svelte](https://testing-library.com/docs/svelte-testing-library/intro) + jsdom

**Always run `npm test` before committing** to confirm nothing is broken.

### Test structure

| File | What it covers |
|---|---|
| `test/unit/functions.test.ts` | All 5 utility functions in `src/functions.ts` |
| `test/components/CookieConsent.test.ts` | Banner visibility, accept/decline flows, cookie writing |
| `test/components/Search.test.ts` | Render, Bing URL construction, query encoding, site prop |

### Writing new tests

- **Pure functions** → add to `test/unit/`
- **Svelte components** → add to `test/components/`
- Path aliases (`@components/*`, `@/*`, etc.) work in test files exactly as in source

**Mocking `import.meta.env.PROD`** (used by `excludeDrafts` / `excludeInstagram`):
```ts
vi.stubEnv('PROD', 'true');   // simulate production build
// DON'T use vi.stubEnv('PROD', 'false') — the string 'false' is truthy!
// For dev-mode tests, just don't stub it; Vitest defaults to PROD = false
```

**Mocking Svelte component globals** (e.g. `getCookieConsent`, `consentGranted`):
```ts
vi.stubGlobal('getCookieConsent', vi.fn().mockReturnValue('unk'));
vi.stubGlobal('consentGranted', vi.fn());
```

**Key config note**: `vitest.config.ts` sets `resolve.conditions: ['browser']` — required for Svelte 5 to use its client-side build instead of the server build in jsdom.

## CI/CD

GitHub Actions workflow (`.github/workflows/deploy.yml`):
- Triggers: push to `main`, daily schedule at 09:45 UTC, manual dispatch
- **`test` job**: installs deps and runs `npm test` — build is blocked if tests fail
- **`build` job**: `withastro/action@v2` (depends on `test`)
- **`deploy` job**: `actions/deploy-pages@v4` → GitHub Pages (depends on `build`)

## Robots / Bot Blocking

The following AI crawlers are blocked via `astro.config.mjs` robots integration:
`CCBot`, `ChatGPT-User`, `GPTBot`, `Google-Extended`, `ClaudeBot`, `Omgili`, `FacebookBot`, `Diffbot`, `Bytespider`, `cohere-ai`

Do not remove these rules.

## Code Style

- TypeScript strict mode — avoid `any`, prefer explicit types
- No comments unless the code genuinely needs clarification
- Prefer concise Astro frontmatter over verbose script blocks
- Keep pages thin — push logic into `functions.ts` or component props
