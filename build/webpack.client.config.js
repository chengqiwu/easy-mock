'use strict'

const webpack = require('webpack')
const merge = require('webpack-merge')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
const LodashModuleReplacementPlugin = require('lodash-webpack-plugin');

const base = require('./webpack.base.config')

const config = merge(base, {
  entry: {
    app: './views/entry/client.js',
    vendor: [
      'vue',
      'axios',
      'vue-router',
      'iview',
      'brace',
      'js-beautify'
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
      minChunks: Infinity,
      filename: '[name].[chunkhash].js',

    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'manifest',
      filename: '[name].[chunkhash].js',
    }),
    new LodashModuleReplacementPlugin({
      'collections': true,
      'paths': true
    }),
    new VueSSRClientPlugin(),
  ]
})

module.exports = config
