// const webpack = require('webpack');
const path = require('path');

module.exports = {
  // entry
  entry: './client/index.js',
  // output
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js',
  },
  // devServer
  devServer: {
    publicPath: '/build/',
    historyApiFallback: true,
  },
  // mode: development/production
  mode: 'development',
  // module: includes rules, etc.
  module: {
    // rules
    rules: [
      {
        test: /\.jsx?/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          // Creates `style` nodes from JS strings
          { loader: 'style-loader' },
          // Translates CSS into CommonJS
          {
            loader: 'css-loader',
            options: {
              modules: true
            }
          },
        ],
      },
    ]
  },
}