/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: { unoptimized: true },
  //i18n: {
  //  defaultLocale: "es",
  //  locales: ["en", "es"],
  //},

  reactStrictMode: true,
}

module.exports = nextConfig
