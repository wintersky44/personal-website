/** @type {import('next').NextConfig} */

// On GitHub Pages this project is served from /personal-website, so assets need
// that prefix in production. Local `next dev` stays at the root.
const isProd = process.env.NODE_ENV === "production";
const repo = "/personal-website";

const nextConfig = {
  // Static HTML export — deployable to GitHub Pages or any static host.
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? repo : "",
  assetPrefix: isProd ? repo : "",
};

export default nextConfig;
