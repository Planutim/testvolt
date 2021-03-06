const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')

module.exports = {
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.resolve(__dirname, 'src','App.js'),
  ],
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: "index.js",
    publicPath: '/'
  },
  devServer:{
    writeToDisk: true
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'src', 'index.html'),
      title: "Master Exploder"
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module:{
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',

        ]
      }
    ]
  },
  mode: "development"
}