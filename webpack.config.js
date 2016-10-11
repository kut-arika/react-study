module.exports = {
  entry: './public/scripts/example.js',
  output: {
    path: './public/scripts',
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
