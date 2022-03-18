/* eslint-disable @typescript-eslint/no-var-requires */
/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');
const withLess = require('next-with-less');

const nextConfig = {
  reactStrictMode: true
};
const plugin = [
  // less config
  [
    withLess,
    {
      lessLoaderOptions: {}
    }
  ]
];

module.exports = withPlugins(plugin, nextConfig);
