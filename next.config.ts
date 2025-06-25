import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"], // ✅ allow external image source
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ disable ESLint during Vercel build
  },
}

export default nextConfig
