/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel gebruikt de standaard Next.js output en route handlers voor de formulieren.
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
