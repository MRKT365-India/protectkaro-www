# ProtectKaro — Marketing Website

Public marketing website for [protectkaro.com](https://www.protectkaro.com).

Built with Next.js 15 and deployed to the existing Cloudflare Worker `protectkaro-www` through OpenNext. The website is separate from the embedded Shopify app and NestJS API hosted on Azure.

## Shopify app
- App runtime: https://app.protectkaro.com
- Backend API: https://api.protectkaro.com

## Development
```bash
npm ci
npm run dev
```

## Validate and build the Worker

The checked-in lockfile pins the security-patched dependency graph. The current Wrangler CLI requires Node.js 22 or newer for build/deployment tooling; Cloudflare runs the generated bundle in its Workers runtime.

```bash
npm run lint
npm run build:worker
npm audit
npm run preview:worker
```

`build:worker` runs the normal Next.js build, including type checking, then produces `.open-next/worker.js` and `.open-next/assets`. Build output, Wrangler state, and development variable files are ignored by Git.

The configuration preserves the existing Worker name, apex/`www` routes, and `ASSETS`, `IMAGES`, and `WORKER_SELF_REFERENCE` bindings. It does not create an R2 cache or enable image optimization; existing `images.unoptimized` behavior remains in place.

## Release

Verify the target Cloudflare account with `npx wrangler whoami` using existing CLI authentication. Keep authentication and account-specific credentials outside Git. Browser sign-in and CLI authentication are separate.

After successful local validation and release authorization:

```bash
npm run build:worker
npm run deploy:worker
```

Deployment is explicit. Pushing this repository does not establish a verified automatic deployment pipeline. Before deployment, record the active Worker version for rollback and preserve any server-only source changes. After deployment, verify the apex and `www` routes, pricing, blog, static assets, and Cloudflare error metrics.

## Security maintenance

The maintenance update keeps Next.js on major version 15 at `15.5.29` and React on the `19.0.9` backport. Targeted overrides update affected transitive PostCSS, minimatch, and glob packages, including build-only dependencies; both the Next and OpenNext build paths must pass after changing them.

Sources checked for the November 2026 release:

- [Next.js November 2026 security release](https://nextjs.org/blog/november-2026-security-release)
- [React October 2026 security advisory](https://github.com/react/react/security/advisories/GHSA-xqc2-xf4c-x3h3)
- [OpenNext Cloudflare setup](https://opennext.js.org/cloudflare/get-started)
