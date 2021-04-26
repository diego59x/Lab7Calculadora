module.exports = {
  mode: 'development',
  devServer: {
    contentBase: 'dist',
    port: 3000,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /.(jsx?)$/,
        use: ['babel-loader', 'eslint-loader'],
      },  
      {
        test: /\.css/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
}
