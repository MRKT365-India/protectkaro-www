import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // No output: "export" — Cloudflare Workers via OpenNext needs standalone output
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
