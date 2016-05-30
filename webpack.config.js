module.exports = {
  context: __dirname + '/app',
  entry: './index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  devtool: "#inline-source-map"

};