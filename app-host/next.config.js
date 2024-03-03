/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');

const remotes = (isServer) => {
  const location = isServer ? 'ssr' : 'chunks';
  return {
    app1: `app1@http://localhost:3001/_next/static/${location}/remoteEntry.js`,
  };
}

module.exports = {
  reactStrictMode: true,
  webpack(config, options) {
      config.plugins.push(
        new NextFederationPlugin({
          name: 'app-host',
          filename: 'static/chunks/remoteEntry.js',
          remotes: remotes(options.isServer),
          exposes: {
          },
        }),
      );
    return config;
  },
};