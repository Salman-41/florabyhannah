import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactCompiler: true,
  turbopack: {
    // Prevent Next from incorrectly inferring the workspace root on Windows
    root: __dirname,
  },
  images: {
    // In development, avoid the built-in image optimizer fetching remote images
    // (which can time out on slower networks and returns 500s for /_next/image).
    // In production we keep optimization enabled.
    unoptimized: process.env.NODE_ENV === "development",
    // Keep optimized sizes reasonable (prevents requests like w=3840).
    deviceSizes: [320, 420, 640, 750, 828, 1080, 1200, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
