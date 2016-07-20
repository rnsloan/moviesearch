const webpack = require('webpack');
const path = require('path');

module.exports = {
  name: "client",
  entry: [
    'webpack-hot-middleware/client',
    "./app/App"
 ],
  output: {
    path: path.join(__dirname, 'public'),
    publicPath: '/public/',
    filename: "bundle.js"
  },
  watchOptions: {
    aggregateTimeout: 300,
    poll: true
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'exports-loader'
      },
      {
        test: /\.(js|jsx)$/,
        include: path.join(__dirname, 'app'),
        loader: 'babel'
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
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
