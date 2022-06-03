/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "he", "ar", "am", "ti"],
    defaultLocale: "he",
    localeDetection: false,
  },
};

module.exports = nextConfig;
