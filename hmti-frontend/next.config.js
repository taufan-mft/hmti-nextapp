const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SEMINAR_API: process.env.SEMINAR_API,
    SEMINAR_API_ADD: process.env.SEMINAR_API_ADD,
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
};

module.exports = nextConfig;
