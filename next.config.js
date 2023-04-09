const path = require('path');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    REVALIDATE: process.env.REVALIDATE,
    DAY_REVALIDATE: process.env.DAY_REVALIDATE,
    NOT_FOUND_URL: process.env.NOT_FOUND_URL,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'artgallery-bucket.s3.eu-central-1.amazonaws.com',
      },
    ],
  },
};

module.exports = nextConfig;
