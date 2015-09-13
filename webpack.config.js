const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  name: "client",
  entry: "./app/App.js",
  output: {
    path: "./public",
    publicPath: '/',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'sourcemap',
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel'
      },
      {
        test: /\.css$/,

        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 2 version", "> 5%"]}')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader!autoprefixer-loader?{browsers:["last 2 version", "> 5%"]}!sass-loader')
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('css/style.css', {
      allChunks: true
    }),
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'Movie Search',
      template: 'app/template.html'
    })
  ]
};

