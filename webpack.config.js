const HtmlWebpackPlugin = require('html-webpack-plugin');
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
        test: /\.js$/,
        loader: 'exports-loader'
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel?stage=1'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style!css'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer?{browsers:["last 2 version", "> 5%"]}'
      },
      {
        test: /\.scss$/,
        exclude: '/node_modules/',
        loader: 'style!css?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!autoprefixer?{browsers:["last 2 version", "> 5%"]}!sass'
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
    new HtmlWebpackPlugin({
      inject: 'body',
      title: 'Movie Search',
      template: 'app/template.html'
    })
  ]
};

