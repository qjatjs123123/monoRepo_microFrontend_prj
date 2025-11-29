import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false, // Strict Mode 비활성화
  logging: {
    fetches: {
      fullUrl: true,
    },
  },
  eslint: {
    ignoreDuringBuilds: true, // ✅ 빌드 시 ESLint 경고 무시
  },
};

export default nextConfig;
