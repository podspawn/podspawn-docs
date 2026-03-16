# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What This Is

Documentation site for [podspawn](https://github.com/o1x3/podspawn) (ephemeral SSH dev containers). Built with Fumadocs + Next.js 16, using bun as the package manager. The main podspawn source code lives in `../podspawn`.

## Commands

```bash
bun install          # install dependencies
bun run dev          # dev server at localhost:3000
bun run build        # production build
bun run lint         # eslint
bun run types:check  # fumadocs-mdx codegen + tsc --noEmit
```

## Architecture

### Content Pipeline

- **Documentation source**: `content/docs/` — 24 MDX pages organized into `getting-started/`, `concepts/`, `configuration/`, `podfile/`, `cli/`, `guides/`
- **Fumadocs config**: `source.config.ts` — defines the docs collection from `content/docs/`, enables `includeProcessedMarkdown` for LLM text extraction
- **Source loader**: `lib/source.ts` — creates the Fumadocs source with base URL `/docs`, provides `getLLMText()` helper
- **MDX integration**: `next.config.mjs` wraps Next config with `createMDX()`, rewrites `.mdx` requests to the `llms.mdx` route

### Key Routes

- `app/docs/[[...slug]]/` — docs pages (Fumadocs `DocsLayout`)
- `app/api/chat/route.ts` — AI chat endpoint using OpenRouter + Vercel AI SDK + FlexSearch over docs content
- `app/api/search/route.ts` — Fumadocs search API (Orama-based)
- `app/llms.txt/`, `app/llms-full.txt/`, `app/llms.mdx/` — LLM-consumable text endpoints
- `app/og/` — dynamic OG image generation using `@takumi-rs/image-response`

### AI Chat

The chat API (`app/api/chat/route.ts`) builds a FlexSearch index over all docs at startup, exposes a `search` tool, and streams responses via OpenRouter. Requires `OPENROUTER_API_KEY` and optionally `OPENROUTER_MODEL` env vars. Frontend component: `components/ai/search.tsx`.

### Path Aliases

- `@/*` → project root
- `collections/*` → `.source/*` (Fumadocs codegen output)

### Styling

Tailwind CSS v4 via `@tailwindcss/postcss`. Global styles in `app/global.css`. Uses `tailwind-merge` via `lib/cn.ts`.
