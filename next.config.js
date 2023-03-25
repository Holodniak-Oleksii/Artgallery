/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    REVALIDATE: process.env.REVALIDATE,
    DAY_REVALIDATE: process.env.DAY_REVALIDATE,
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
