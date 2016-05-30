module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devtool: "#inline-source-map",
  //watch: true,

  module: {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.es6', '.html']
  }

};