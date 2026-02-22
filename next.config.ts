import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React strict mode (catches bugs in dev)
  reactStrictMode: true,

  // Allow external images (Unsplash etc.)
  images: {
    domains: ["images.unsplash.com"],
  },

  // Helpful when deploying (Vercel / Node)
  poweredByHeader: false,

  // Optional: keep trailing slashes consistent
  trailingSlash: false,

  // Optional: better DX with Turbopack
  experimental: {
    turbo: {
      rules: {
        "*.svg": {
          loaders: ["@svgr/webpack"],
        },
      },
    },
  },
};

export default nextConfig;