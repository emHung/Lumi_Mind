/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Lumi_Mind',
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['img.clerk.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // This is needed for Clerk authentication to work with static exports
  typescript: {
    ignoreBuildErrors: true,
  },
  // Disable API routes in static export
  experimental: {
    appDir: true,
  },
  // Add trailing slashes to URLs
  trailingSlash: true,
  // Disable server-side features
  reactStrictMode: true,
}

module.exports = nextConfig 