var path = require('path');

module.exports = {
  entry: path.resolve(__dirname + "/client/index.es6"),
  output: {
    path: path.resolve(__dirname + '/public'),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(jsx?|es6)$/,
        include: [path.resolve(__dirname + '/client')],
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.less$/,
        loader: 'style!css!autoprefixer!less'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.es', '.es6']
  }
}
