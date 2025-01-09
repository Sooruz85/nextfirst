import { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true, // Active le système de fichiers `app/` pour les routes dynamiques.
  },
};

export default nextConfig;
