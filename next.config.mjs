/** @type {import('next').NextConfig} */

// The site is deployed to a custom domain (farrr.site) via GitHub Pages, which
// serves from the domain ROOT — so no basePath/assetPrefix is needed. (If the
// custom domain is ever removed and the site is served from
// <user>.github.io/personal-website instead, set basePath/assetPrefix back to
// "/personal-website" so assets resolve under that subpath.)
const nextConfig = {
  // Static HTML export — deployable to GitHub Pages or any static host.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
