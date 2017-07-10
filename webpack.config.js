var path = require('path');

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['.scss', '.js']
  },
  module: {
    loaders: [{
      test: /\.scss$/,
      loader: "style!css!sass"
    }]
  }
/*,
  plugins: [
    extractSass
  ]
*/
};
