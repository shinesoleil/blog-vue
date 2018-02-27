'use strict';

var path = require('path');

function resolve(dir) {
  return path.join(__dirname, '..', dir);
}

module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [{
      test: /\.scss$/,
      loaders: ["style-loader", "css-loader", "sass-loader"],
      include: path.resolve(__dirname, '../')
    }]
  }
};
//# sourceMappingURL=webpack.config.js.map