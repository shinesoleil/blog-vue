'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var utils = require('./utils');
var webpack = require('webpack');
var config = require('../config');
var merge = require('webpack-merge');
var path = require('path');
var baseWebpackConfig = require('./webpack.base.conf');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin');
var portfinder = require('portfinder');

var HOST = process.env.HOST;
var PORT = process.env.PORT && Number(process.env.PORT);

var devWebpackConfig = merge(baseWebpackConfig, {
  module: {
    rules: utils.styleLoaders({ sourceMap: config.dev.cssSourceMap, usePostCSS: true })
  },
  // cheap-module-eval-source-map is faster for development
  devtool: config.dev.devtool,

  // these devServer options should be customized in /config/index.js
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') }]
    },
    hot: true,
    contentBase: false, // since we use CopyWebpackPlugin.
    compress: true,
    host: HOST || config.dev.host,
    port: PORT || config.dev.port,
    open: config.dev.autoOpenBrowser,
    overlay: config.dev.errorOverlay ? { warnings: false, errors: true } : false,
    publicPath: config.dev.assetsPublicPath,
    proxy: config.dev.proxyTable,
    quiet: true, // necessary for FriendlyErrorsPlugin
    watchOptions: {
      poll: config.dev.poll
    }
  },
  plugins: [new webpack.DefinePlugin({
    'process.env': require('../config/dev.env')
  }), new webpack.HotModuleReplacementPlugin(), new webpack.NamedModulesPlugin(), // HMR shows correct file names in console on update.
  new webpack.NoEmitOnErrorsPlugin(),
  // https://github.com/ampedandwired/html-webpack-plugin
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: 'index.html',
    title: 'blog',
    favicon: './build/logo.png',
    inject: true
  }),
  // copy custom static assets
  new CopyWebpackPlugin([{
    from: path.resolve(__dirname, '../static'),
    to: config.dev.assetsSubDirectory,
    ignore: ['.*']
  }])]
});

module.exports = new _promise2.default(function (resolve, reject) {
  portfinder.basePort = process.env.PORT || config.dev.port;
  portfinder.getPort(function (err, port) {
    if (err) {
      reject(err);
    } else {
      // publish the new Port, necessary for e2e tests
      process.env.PORT = port;
      // add port to devServer config
      devWebpackConfig.devServer.port = port;

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: ['Your application is running here: http://' + devWebpackConfig.devServer.host + ':' + port]
        },
        onErrors: config.dev.notifyOnErrors ? utils.createNotifierCallback() : undefined
      }));

      resolve(devWebpackConfig);
    }
  });
});
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map
//# sourceMappingURL=webpack.dev.conf.js.map