/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      { protocol: 'https', hostname: 'res.cloudinary.com', pathname: '/**' },
      // Menu / landing-page photos currently live in this GitHub repo (direct raw URLs, no redirect)
      { protocol: 'https', hostname: 'raw.githubusercontent.com', pathname: '/codeandcanvas18/Adalat-Website-Images/**' },
    ],
  },
  async headers() {
    return [
      {
        source: '/:all*(webp|png|jpg|jpeg|svg|avif)',
        headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
      },
    ];
  },
};

export default nextConfig;
