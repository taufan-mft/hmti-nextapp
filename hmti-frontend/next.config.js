const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    SEMINAR_API: process.env.SEMINAR_API,
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
        }
    ],
  },
};

module.exports = nextConfig;
