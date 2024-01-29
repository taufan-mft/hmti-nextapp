const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SEMINAR_API: process.env.SEMINAR_API,
    DRIVEIMAGE_API: process.env.DRIVEIMAGE_API,
    NEWS_API: process.env.NEWS_API,
    KABINET_API: process.env.KABINET_API,
    MAHASISWA_API: process.env.MAHASISWA_API,
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
      },
      {
        protocol: 'https',
        hostname: 'hmti-unsoed.org'
      },

      //For Development
      {
        protocol: 'http',
        hostname: '127.0.0.1'
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;
