const webpackBase = require('./webpack.base');
const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

const isProduction = process.env.NODE_ENV === 'production'

const clientConfig = {
  ...webpackBase,
  target: 'node',
  entry: path.resolve(__dirname, '../src/server/index.tsx'),
  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, '../dist/server'),
  },
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, '../src'),
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/server/templates", to: "templates", force: true,}
      ],
    }),
  ],
  mode: isProduction ? 'production' : 'development'
}

module.exports = clientConfig;

