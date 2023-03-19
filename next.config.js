/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
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
