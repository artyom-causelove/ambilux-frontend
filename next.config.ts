import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    dangerouslyAllowLocalIP: true,
    remotePatterns: [{
      hostname: '158.160.34.62',
      protocol: 'http',
      pathname: '/**',
      port: '3001'
    }]
  },
};

export default nextConfig;
