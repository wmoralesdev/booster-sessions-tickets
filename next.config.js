/** @type {import('next').NextConfig} */
const withImages = require('next-images');

module.exports = withImages({
  eslint: {
    dirs: [ 'src' ]
  },
  reactStrictMode: true,
});