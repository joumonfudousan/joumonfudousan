/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    distDir: 'out',
    basePath: '/nexj_page',
    images: {
        unoptimized: true,
    }
};

export default nextConfig;
