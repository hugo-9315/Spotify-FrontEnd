/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = {
  ...nextConfig,
  images: {
    domains: ["tracksbucket.s3.eu-west-3.amazonaws.com"], // Remplacez par le domaine réel de votre bucket S3
  },
};
