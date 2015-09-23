const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

const devConfig = require('./webpack.config.js');

module.exports = {
  name: 'client-production',
  entry: devConfig.entry,
  output: {
    path: "./public",
    publicPath: '/',
    filename: "bundle.[hash].js"
  },
  resolve: devConfig.resolve,
  module: {
    loaders: devConfig.module.loaders
  },
  plugins: [
    new webpack.DefinePlugin({
      __MOVIEAPIKEY__: JSON.stringify(process.env.MOVIEAPIKEY)
    }),
    new ExtractTextPlugin('css/style.[hash].css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'Movie Search',
      template: 'app/template.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        // reduce react lib size
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
};
