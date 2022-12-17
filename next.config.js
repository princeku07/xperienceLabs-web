/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: false,
  },
};



module.exports = {
  nextConfig,
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
}