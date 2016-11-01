module.exports = {
  entry: './app',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader?name=/public/icons/[name].[ext]',
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'stage-0'],
          plugins: ['transform-runtime'],
        },
      },
    ],
  },
};
