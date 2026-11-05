import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // OpenNext bundles this server output into the existing Cloudflare Worker.
  output: "standalone",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
