'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const base = require('./webpack.base.config')

const config = merge(base, {
  entry: {
    app: './views/entry/client.js',
    vendor: [
      'vue',
      'vue-router',
      'axios',
      'brace',
      'iview',
    ]
  },
  devtool: false,
  plugins: [
    // strip comments in Vue code
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"client"'
    }),
    // extract vendor chunks for better caching
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
    }),
    new LodashModuleReplacementPlugin({
      'collections': true,
      'paths': true
    }),
    new VueSSRClientPlugin(),
    new BundleAnalyzerPlugin({ analyzerPort: 8919 }),
  ]
})

module.exports = config
