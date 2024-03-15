/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL:"http://localhost:3002/api",
        S3_KEY:"AKIAQ3EGVA3AFX47NXTK",
        S3_SECRET:"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",
        S3_REGION:"us-east-1",
        S3_BUCKET:"rsdev",
    },
    compiler: {
        styledComponents: {ssr: true},
    },
    reactStrictMode: false,
};

export default nextConfig;
