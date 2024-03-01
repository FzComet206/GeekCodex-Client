/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL:"http://localhost:3002/api"
    },
    compiler: {
        styledComponents: {ssr: true},
    }
};

export default nextConfig;
