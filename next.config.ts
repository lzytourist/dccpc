import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'api.dccpc.club',
                pathname: '/**',
            },
        ],
    },
};

export default nextConfig;
