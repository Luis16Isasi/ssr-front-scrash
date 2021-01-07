const webpackBase = require('./webpack.base');
const path = require('path')

const isProduction = process.env.NODE_ENV === 'production'

const clientConfig = {
  ...webpackBase,
  resolve: {
    extensions: [".js", ".json", ".jsx", ".css", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|mjs|ts|tsx)$/,
        exclude: /(node_modules|bower_components)/,
        include: path.resolve(__dirname, '../src/client'),
        use: {
          loader: 'babel-loader',
        }
      }
    ]
  },
  entry: path.resolve(__dirname, '../src/client/index.tsx'),
  output: {
    filename: isProduction ? '[name].[hash:8].min.js' : '[name].min.js',
    path: path.resolve(__dirname, '../dist/client'),
    publicPath: "/static/js/"
  },
  mode: isProduction ? 'production' : 'development'
}

if (!isProduction) {
  clientConfig.devServer = {
    contentBase: path.join(__dirname, '../dist/client'),
    port: 9000,
    publicPath: "/static/js/"
  }
}


module.exports = clientConfig;

