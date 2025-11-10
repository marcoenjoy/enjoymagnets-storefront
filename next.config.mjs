/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.images.enjoymagnets.com' },
      { protocol: 'https', hostname: 'images.enjoymagnets.com' }
    ]
  },
  experimental: { appDir: true }
};
export default nextConfig;
