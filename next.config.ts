/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["avatars.githubusercontent.com"], // ✅ allow external image source
  },
};

export default nextConfig;
