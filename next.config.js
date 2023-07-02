/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  transpilePackages: [
    "@geoapify/geocoder-autocomplete",
    "@geoapify/react-geocoder-autocomplete",
  ],
};
