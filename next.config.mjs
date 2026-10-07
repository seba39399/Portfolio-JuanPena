/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/Portfolio-JuanPena",
  env: {
    NEXT_PUBLIC_BASE_PATH: "/Portfolio-JuanPena",
  },
};

export default nextConfig;
