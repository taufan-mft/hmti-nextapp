const { hostname } = require('os');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    
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
