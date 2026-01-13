/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for Netlify
  output: 'standalone', // Changed from 'export' to 'standalone' for better compatibility
  
  typescript: {
    ignoreBuildErrors: true,
  },
  
  images: {
    unoptimized: true,
  },
  
  // Enable for better routing
  trailingSlash: false,
  
  // Disable powered by header
  poweredByHeader: false,
}

export default nextConfig