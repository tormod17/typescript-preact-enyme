var webpack = require('../tasks/webpack');


/* -----------------------------------
 *
 * Config
 *
 * -------------------------------- */

module.exports = function (config) {
   config.set({
      basePath: '../',
      frameworks: ['mocha', 'chai', 'sinon'],
      files: [
         './tests/**/*.spec.ts*'
      ],
      exclude: [],
      preprocessors: {
         './tests/**/*.spec.ts*': ['webpack']
      },
      webpack,
      reporters: ['mocha'],
      port: 9876,
      colors: true,
      logLevel: config.LOG_ERROR,
      autoWatch: false,
      browsers: ['PhantomJS'],
      singleRun: true,
      concurrency: Infinity,
      webpackMiddleware: {
         stats: 'none'
      },
      phantomJsLauncher: {
         exitOnResourceError: true
      }
   })
}