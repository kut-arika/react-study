module.exports = {
  entry: './src/js/app.js',
  output: {
    path: './public/js',
    publicPath: '/js/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  },
  devServer: {
    contentBase: 'public'
  }
};
