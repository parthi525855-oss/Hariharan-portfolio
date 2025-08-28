# Hariharan Portfolio (Next.js)

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/parthi525855-oss-projects/v0-hariharan-portfolio)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/cgxzAaQ7Tt0)

## Overview

Modern portfolio built with Next.js App Router, Tailwind CSS, and React Three Fiber.

## Prerequisites

- Node.js 18.18+ or 20+
- pnpm 8+ (Corepack will auto-activate)

## Local Development

```bash
pnpm install
pnpm dev
```

Then open `http://localhost:3000`.

## Production Build

```bash
pnpm install --frozen-lockfile
pnpm build
pnpm start
```

## Deployment

This project is optimized for Vercel:

- Uses Next.js 15 App Router
- Disables SSR on the homepage to support WebGL/three.js (`window` usage)
- Ignores TypeScript and ESLint errors during build in `next.config.mjs`

Steps:

1. Push to GitHub
2. Import the repo on Vercel and deploy

Environment variables: none required by default.

## Notes

- The 3D canvas is client-only to avoid SSR `window is not defined` during prerender.
- Images are served unoptimized via Next.js `images.unoptimized` to simplify deploys.
