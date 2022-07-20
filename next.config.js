/** @type {import('next').NextConfig} */
//const nextjsDistDir = join("src", require("./src/next.config.js").distDir);
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
 // distDir: nextjsDistDir,
  images: {
    domains: ['www.google.com']
  }
}

module.exports = nextConfig
