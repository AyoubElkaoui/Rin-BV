/** @type {import('next').NextConfig} */
const nextConfig = {
  // Statische export: 'npm run build' schrijft een ./out map die je direct op Netlify kunt zetten.
  output: 'export',
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
