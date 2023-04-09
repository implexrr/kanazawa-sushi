const path = require('path');

module.exports = {
  performance: {
    assetFilter: function(assetFilename) {
      return !assetFilename.endsWith('.jpg');
    },
  },

  entry: './src/index.js',
  devServer: {
    static: './dist',
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
 module: {
   rules: [
     {
       test: /\.css$/i,
       use: ['style-loader', 'css-loader'],
     },
     {
      test: /\.(png|svg|jpg|jpeg|gif)$/i,
      type: 'asset/resource',
    },
   ],
 },
};