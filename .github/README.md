# Quality checks

`workflows/quality.yml` runs on relevant source/configuration changes in `main`
pushes, pull requests targeting `main`, and manual runs. It uses Node 24.22.2
for lint, a local Next.js/OpenNext Worker build, TypeScript checking, four public
contract tests, and an audit that rejects every severity.

`tests/public-contract.test.mjs` starts and stops its own Next.js production
server on localhost port 3415. It checks the built marketing pages. It does not
contact the deployed Worker or prove the Cloudflare runtime works in production.
The OpenNext build creates artifacts locally and does not deploy them.

There are no deployment steps, Cloudflare credentials, GitHub secrets, or
production account access. Repository permissions are read-only, checkout
credentials are not persisted, and obsolete runs are cancelled. Required branch
checks need separate configuration after the first successful GitHub run.

Official releases verified November 6, 2026: [checkout v7.0.1](https://github.com/actions/checkout/releases/tag/v7.0.1)
and [setup-node v7.1.0](https://github.com/actions/setup-node/releases/tag/v7.1.0),
pinned by full release commit SHA.
