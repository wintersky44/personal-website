// Ambient declarations for non-code imports so TypeScript accepts side-effect
// imports like `import "./globals.css"`. These assets are handled by Next's
// bundler at build time; this only satisfies the type checker (TS 2882).
declare module "*.css";
declare module "*.scss";
