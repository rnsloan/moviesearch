const fs = require('fs');
const webpack = require('webpack');

const nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function (x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function (mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  name: "test",
  entry: './tests/testBuild.unit.js',
  target: 'node',
  output: {
    path: './tests/',
    filename: 'test-bundle.js'
  },
  externals: nodeModules,
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
        loader: 'babel'
      }
    ]
  },
  plugins: [
    new webpack.NormalModuleReplacementPlugin(/\.(html|css|sass|scss|jpe?g|png|gif|svg)$/, 'node-noop')
  ]
}

