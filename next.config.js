/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/Lumi_Mind',
  output: 'export',
  images: {
    unoptimized: true,
    domains: ['img.clerk.com', 'convex.dev'],
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
  // Allow Convex WebSocket connections
  async rewrites() {
    return [
      {
        source: '/api/convex/:path*',
        destination: 'https://convex.dev/api/:path*',
      },
    ];
  },
}

module.exports = nextConfig 