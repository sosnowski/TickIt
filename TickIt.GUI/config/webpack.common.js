var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'vendor': './src/vendor.ts',
        'app': './src/main.ts',
        'login': './src/login.ts',
        'register': './src/register.ts',
        'app_css': './src/styles/main.scss',
        'login_css': './src/styles/login.scss'
    },

    resolve: {
        extensions: ['', '.js', '.ts']
    },

    module: {
        preLoaders: [
            {
                test: /\.ts$/,
                loader: "tslint"
            }
        ],
        loaders: [
          {
              test: /\.ts$/,
              loaders: ['ts', 'angular2-template-loader']
          },
          {
              test: /\.html$/,
              loader: 'html'
          },
          {
              test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
              loader: 'file?name=assets/[name].[hash].[ext]'
          },
          {
              test: /\.scss/,
              exclude: helpers.root('src', 'app'),
              loader: ExtractTextPlugin.extract('style', 'css!sass?sourceMap')
          },
          {
              test: /\.scss$/,
              include: helpers.root('src', 'app'),
              loader: 'raw!sass'
          }
        ]
    },

    plugins: [
      new webpack.optimize.CommonsChunkPlugin('shared.js'),

      new HtmlWebpackPlugin({
          template: 'src/index.html',
          filename: 'index.html',
          extraFiles: ['libs/materialize.js'],
          chunks: ['shared.js', 'vendor', 'app', 'app_css'],
          chunksSortMode: 'auto'
      }),
      new HtmlWebpackPlugin({
          template: 'src/login.html',
          filename: 'login.html',
          extraFiles: ['libs/materialize.js'],
          chunks: ['shared.js', 'login', 'login_css'],
          chunksSortMode: 'auto'
      }),
      new HtmlWebpackPlugin({
          template: 'src/register.html',
          filename: 'register.html',
          extraFiles: ['libs/materialize.js'],
          chunks: ['shared.js', 'register', 'login_css'],
          chunksSortMode: 'auto'
      })
    ]
};