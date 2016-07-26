var webpack = require('webpack');
var RewirePlugin = require("rewire-webpack");

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: ['mocha','sinon','chai-sinon'], //use the mocha test framework
    files: [
      { pattern: 'tests.webpack.js', watched: true },
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'dots' ,'coverage'], //report results in this format
    coverageReporter: {
     type: 'html', //produces a html document after code is run
     dir: 'coverage/' //path to created html doc
    },
    webpack: { //kind of a copy of your webpack config
      devtool: 'inline-source-map', //just do inline source maps instead of the default
      module: {
        loaders: [
          { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ }
        ],
        postLoaders: [ { //delays coverage til after tests are run, fixing transpiled source coverage error
        test: /\.js$/,
        exclude: /(test|node_modules|bower_components)\//,
        loader: 'istanbul-instrumenter' } ]
      },
      watch: true,
    },
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    }
  });
};