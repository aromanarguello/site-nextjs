const { parsed: localEnv } = require('dotenv').config()
const webpack = require('webpack')
const withPlugins = require('next-compose-plugins')
const typescript = require('@zeit/next-typescript')
// const optimizedImages = require('next-optimized-images')
const images = require('next-images')

const nextConfig = {
  webpack(config) {
    config.plugins.push(new webpack.EnvironmentPlug(localEnv))
    return config
  }
}

module.exports = withPlugins([[typescript], [images]], {
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  },
  nextConfig
})
