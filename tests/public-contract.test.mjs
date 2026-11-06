import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { once } from 'node:events';
import { setTimeout as delay } from 'node:timers/promises';
import test, { before, after } from 'node:test';

const origin = 'http://127.0.0.1:3415';
let server;
let output = '';

before(async () => {
  server = spawn(process.execPath, ['node_modules/next/dist/bin/next', 'start', '-H', '127.0.0.1', '-p', '3415'], {
    cwd: new URL('..', import.meta.url), env: { ...process.env, NODE_ENV: 'production' },
    stdio: ['ignore', 'pipe', 'pipe'],
  });
  server.stdout.on('data', chunk => { output += chunk; });
  server.stderr.on('data', chunk => { output += chunk; });
  for (let attempt = 0; attempt < 100; attempt++) {
    if (server.exitCode !== null) throw new Error(`Preview failed: ${output}`);
    try { if ((await fetch(origin)).ok) return; } catch {}
    await delay(100);
  }
  throw new Error('Local website did not become ready');
});

after(async () => {
  if (server && server.exitCode === null) { server.kill('SIGTERM'); await once(server, 'exit'); }
});

async function page(path) {
  const response = await fetch(origin + path);
  assert.equal(response.status, 200);
  return response.text();
}

test('homepage installation uses Shopify App Store without requesting a shop domain', async () => {
  const html = await page('/');
  assert.match(html, /href="https:\/\/apps\.shopify\.com\/protectkaro"/);
  assert.doesNotMatch(html, /<input\b|yourstore\.myshopify\.com|\/auth\/install\?shop=/);
});

test('pricing promises delivered features and retains the current monthly price', async () => {
  const html = await page('/pricing');
  assert.match(html, /\$12/);
  assert.doesNotMatch(html, /custom branded banner|multi.language banner support/i);
});

test('policy distinguishes access windows from record deletion and acknowledges processing providers', async () => {
  const html = await page('/privacy');
  assert.match(html, /90 days/);
  assert.match(html, /365 days/);
  assert.match(html, /access windows/i);
  assert.match(html, /uninstall|deletion request/i);
  assert.match(html, /hosting|infrastructure/i);
  assert.doesNotMatch(html, /retained for 3 years|do not sell, share, or transfer data to third parties/i);
});

test('terms describe optional paid plans without a blanket free or compliance guarantee', async () => {
  const html = await page('/terms');
  assert.match(html, /Free/);
  assert.match(html, /paid Pro/);
  assert.doesNotMatch(html, /free of charge/);
  assert.match(html, /does not guarantee.*compliance/i);
});

test('theme-status feature copy requires a separate storefront behavior check', async () => {
  const html = await page('/features/protection-status');
  assert.match(html, /theme configuration/i);
  assert.match(html, /test a storefront choice/i);
  assert.doesNotMatch(html, /Instead of forcing merchants to inspect the storefront manually/);
});

test('product promotions describe access windows rather than longer physical retention', async () => {
  for (const path of ['/how-it-works', '/compare/free-vs-pro-consent-proof', '/features/consent-records', '/guides/dpdp-compliance-for-shopify-india', '/shopify-dpdp-compliance', '/shopify-privacy-compliance-india', '/blog/best-dpdp-compliance-app-for-shopify-in-india', '/blog/how-to-create-audit-ready-consent-records-in-shopify', '/blog/shopify-privacy-compliance-india-guide', '/blog/how-agencies-can-manage-dpdp-for-shopify-clients']) {
    const html = await page(path);
    assert.doesNotMatch(html, /longer retention|stronger retention|retention depth/i, path);
  }
});
