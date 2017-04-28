const path = require('path');
const rimraf = require('rimraf');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {

  entry: {
    app: './test/app.js',
  },

  output: {
    path: path.resolve(__dirname, '../build'),
    filename: '[name].[chunkhash].js',
  },

  module: {
    rules: [
      {
        test: /\.(js|svg)$/i,
        loader: 'babel-loader',
        include: __dirname,
        query: {
          presets: ['react'],
        },
      },
      {
        test: /\.svg$/i,
        loader: path.resolve(__dirname, './svg-to-jsx-loader-spec.js'),
      },
      {
        test: /\.svg$/i,
        loader: path.resolve(__dirname, '../index.js'),
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './app.html'),
    }),
  ],

  stats: {
    colors: true,
    reasons: true,
    hash: false,
    version: false,
    timings: true,
    chunks: false,
    chunkModules: false,
    cached: false,
    cachedAssets: false,
  },

};

const bundler = webpack(webpackConfig);

rimraf.sync('build/*');

bundler.run((err, stats) => {
  if (err) throw err;

  console.info(stats.toString(webpackConfig.stats));
});
