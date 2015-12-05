var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './test/app.js'
  },
  output: {
    path: path.join(__dirname, '../build'),
    filename: '[name].[chunkhash].js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|svg)$/i,
        loader: 'babel-loader',
        include: __dirname,
        query: {
          presets: ['react', 'es2015']
        },
        plugins: [
          'transform-runtime'
        ]
      },
      {
        test: /\.svg$/i,
        loader: './svg-to-jsx-loader-spec.js'
      },
      {
        test: /\.svg$/i,
        loader: '../index.js'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, './app.html')
    })
  ]
};
