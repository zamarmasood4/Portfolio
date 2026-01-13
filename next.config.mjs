/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Add this line for static export
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  // Optional: Add trailing slash for better compatibility
  trailingSlash: false,
}

export default nextConfig;