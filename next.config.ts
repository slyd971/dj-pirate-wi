import type { NextConfig } from "next";

const buildOnlyPackages = [
  // SWC native compiler — build-only, ~100MB on Linux
  "node_modules/@next/swc*/**",
  // TypeScript compiler — devDependency, build-only
  "node_modules/typescript/**",
  // CSS build tools — processed at build time only
  "node_modules/tailwindcss/**",
  "node_modules/@tailwindcss/**",
  "node_modules/postcss/**",
  "node_modules/autoprefixer/**",
  "node_modules/caniuse-lite/**",
  "node_modules/lightningcss/**",
  "node_modules/lightningcss-darwin-x64/**",
  "node_modules/lightningcss-linux-x64-gnu/**",
  "node_modules/magic-string/**",
  // Sharp image binaries — Vercel CDN handles image optimization
  "node_modules/@img/**",
  "node_modules/sharp/**",
  // Next.js build-only compiled internals
  "node_modules/next/dist/compiled/webpack/**",
  "node_modules/next/dist/compiled/next-devtools/**",
  "node_modules/next/dist/compiled/babel/**",
  "node_modules/next/dist/compiled/babel-packages/**",
];

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/opengraph-image": ["./public/**/hero/**"],
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  outputFileTracingExcludes: {
    "/**": buildOnlyPackages,
    "/": buildOnlyPackages,
    "/_not-found": buildOnlyPackages,
    "/gallery": buildOnlyPackages,
    "/videos": buildOnlyPackages,
    "/api/revalidate": buildOnlyPackages,
    "/opengraph-image": buildOnlyPackages,
    "/robots.txt": buildOnlyPackages,
    "/sitemap.xml": buildOnlyPackages,
  },
};

export default nextConfig;
