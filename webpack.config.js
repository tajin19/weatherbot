module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  devtool: "#inline-source-map",
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  }
};