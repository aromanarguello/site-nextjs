const withPlugins = require('next-compose-plugins')
const typescript = require('@zeit/next-typescript')
// const optimizedImages = require('next-optimized-images')
const images = require('next-images')

module.exports = withPlugins([[typescript], [images]])
