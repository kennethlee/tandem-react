var webpack = require('webpack');

module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/Index.js',
  ],
  output: {
    path: 'dist',
    publicPath: '/',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js?$/, exclude: /node_modules/, loader: 'react-hot!babel' },
    ],
  },
  resolve: {
    extensions: ['', '.js'],
  },
  devServer: {
    contentBase: './dist',
    hot: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
