/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',  // Required for GitHub Pages
  
  // This is the critical part for your URL:
  basePath: '/portfolio',
  
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig