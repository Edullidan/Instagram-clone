/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  env: {
    MONGODB_URI: "your-mongodb-uri-here",
  },
};
