/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    basePath: '',
    assetPrefix: '',
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
