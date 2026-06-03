/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static HTML export — deployable to GitHub Pages or any static host.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
