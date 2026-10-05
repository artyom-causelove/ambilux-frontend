import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    // На сервере 1 ГБ памяти: параллельная обработка крупных картинок в sharp
    // раздувала next-server до ~480 МБ, и его убивал OOM-killer (05.10.2026).
    imgOptConcurrency: 1,
  },
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
