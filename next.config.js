module.exports = {
  images: {
    domains: ['cdn.sanity.io', 'cdn.shopify.com']
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
};