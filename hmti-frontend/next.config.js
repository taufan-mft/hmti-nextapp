const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SEMINAR_API: process.env.SEMINAR_API,
    DRIVEIMAGE_API: process.env.DRIVEIMAGE_API,
  },
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'images.unsplash.com'
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com'
        },
        {
          protocol: 'https',
          hostname: 'drive.google.com',
        }
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
