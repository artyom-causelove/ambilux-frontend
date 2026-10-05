import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [{
      hostname: 'ambilux.com',
      protocol: 'https',
      pathname: '/**'
    }]
  },
  // Адреса из напечатанных QR-кодов (ambilux.ru/about#awards, /about#media, /team#vacancy).
  // Отдельных страниц больше нет — это секции главной. Якорь браузер переносит через
  // редирект сам, а главная доскролливает до него после монтирования.
  async redirects() {
    return [
      { source: '/about', destination: '/', permanent: false },
      { source: '/team', destination: '/', permanent: false }
    ];
  },
};

export default nextConfig;
