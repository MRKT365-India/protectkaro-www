import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",        // Static HTML export for Cloudflare Pages
  trailingSlash: true,     // Cloudflare Pages prefers trailing slashes
  images: {
    unoptimized: true,     // Required for static export
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
