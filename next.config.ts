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
};

export default nextConfig;
