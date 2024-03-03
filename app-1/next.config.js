/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

module.exports = {
  reactStrictMode: false,
  webpack(config, options) {
    if (!options.isServer) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'app1',
          filename: 'static/chunks/remoteEntry.js',
          remotes: {
          },
          exposes: {
            './app1': './src/pages/index.tsx',
          },
          shared: {},
          extraOptions: {
            exposePages: true,
            automaticAsyncBoundary: true,
          },
        }),
      );
    }

    return config;
  },
};