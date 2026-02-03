const repo = "portfolio"

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: `/${repo}`,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
