const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  assetPrefix: isProd ? '/stonkx/' : '',
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat',
      })
    }
    return config
  },
}
