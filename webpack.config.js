const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: [path.join(__dirname, 'src', 'entry.jsx'),
    'webpack-dev-server/client?http://localhost:8080',
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
  ],


  module: {
    rules: [
      {
        test: /\.jsx$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['react-hot-loader/babel'],
            presets: ['es2015', 'react'],
          },
        },
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader'],
        }),
      },
    ],
  },

  devServer: {
    hot: true,
    // enable HMR on the server

    contentBase: path.join(__dirname, 'static'),
    // match the output path

    publicPath: '/',
    // match the output `publicPath`
  },
  resolve: {
    extensions: ['.js', '.scss', '.jsx'],
    modules: ['node_modules', path.resolve('src')],
  },

  output: {
    path: path.join(__dirname, 'static'),
    filename: 'index.js',
    publicPath: '/',
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/index.tpl.html',
      inject: 'body',
      filename: '../templates/index.html',
    }),
    new ExtractTextPlugin('style.css'),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
