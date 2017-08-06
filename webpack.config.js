var config = {
  context: __dirname + '/lib',
  entry: {
    app: './index.js',
  },
  output: {
    path: __dirname + '/www/bundle',
    filename: 'bundle.js',
    publicPath: "/bundle",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.(sass|scss)$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      }
    ]
  },

  devServer: {
    contentBase: __dirname + '/www',
  },

  devtool: 'eval-source-map'
};

if (process.env.NODE_ENV === 'production') {
  config.devtool = 'source-map';
}

module.exports = config;
