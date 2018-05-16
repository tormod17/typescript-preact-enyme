const webpack = require('webpack');
const path = require('path');
const fs = require('fs');


/* -----------------------------------
 *
 * Flags
 *
 * -------------------------------- */

const DEBUG = process.argv.includes('--debug');
const RELEASE = process.argv.includes('--release');


/* -----------------------------------
 *
 * Globals
 *
 * -------------------------------- */

const GLOBALS = {
   __DEV__: DEBUG
};


/* -----------------------------------
 *
 * Webpack
 *
 * -------------------------------- */

module.exports = {

   mode: !RELEASE ? 'development' : 'production',

   context: path.join(__dirname, './src'),

   cache: !RELEASE,

   target: 'web',

   output: {
      chunkFilename: !RELEASE ? '[id].js' : '[id]-[chunkhash:8].js',
      jsonpFunction: '__LIB__',
      publicPath: '/dist/'
   },

   resolve: {
      modules: [
         'node_modules'
      ],
      extensions: [
         '.ts',
         '.tsx',
         '.js',
         '.json',
         '.scss'
      ],
      alias: {
         'react': 'preact-compat',
         'react-dom': 'preact-compat'
      }
   },

   module: {
      rules: [
         // {
         //    test: /\.tsx?$/,
         //    enforce: 'pre',
         //    loader: 'tslint-loader',
         //    options: {
         //       fix: true
         //    }
         // },
         {
            test: /\.tsx?$/, 
            use: [
               {
                  loader: 'ts-loader'
               }
            ]
         }
      ]
   },

   performance: {
      hints: 'warning',
      maxAssetSize: 500000,
      maxEntrypointSize: 400000,
      assetFilter: function(name) {
        return name.endsWith('.css') || name.endsWith('.js');
      }
   },

   plugins: [

      new webpack.DefinePlugin({
         ...GLOBALS
      })

   ]

};