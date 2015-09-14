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
        loader: 'babel?stage=1'
      },
      {
        test: /\.css$/,

        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer?{browsers:["last 2 version", "> 5%"]}')
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer?{browsers:["last 2 version", "> 5%"]}!sass')
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      __MOVIEAPIKEY__: JSON.stringify(process.env.MOVIEAPIKEY)
    }),
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

