const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  name: 'client-production',
  entry: "./app/App.js",
  output: {
    path: "./public",
    publicPath: '/',
    filename: "bundle.[hash].js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'exports-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css')
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer?{browsers:["last 2 version", "> 5%"]}')
      },
      {
        test: /\.scss$/,
        exclude: '/node_modules/',
        loader: ExtractTextPlugin.extract('style', 'css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer?{browsers:["last 2 version", "> 5%"]}!sass')
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/,
        loaders: [
          'file?hash=sha512&digest=hex&name=[name].[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
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
      template: 'app/index.prod.html'
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
