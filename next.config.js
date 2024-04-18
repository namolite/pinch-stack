/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    unoptimized: true
  },
  output: 'export',

  webpack: (config) => {
    config.resolve.fallback = {
      fs: false,
      path: false
    }
    return config
  },
}

module.exports = nextConfig
