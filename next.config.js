// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // Required for static export
  },
};

module.exports = nextConfig;
