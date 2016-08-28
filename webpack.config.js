"use strict";

const NODE_ENV = process.env.NODE_ENV || "development";
const webpack = require("webpack");

module.exports = {
  "entry": {
    "app": "./app",
  },
  "output": {
    "filename": "[name].bundle.js",
  },
  "watch": NODE_ENV == "development",
  "watchOptions": {
    "aggregateTimeout": 100,
  },
  "devtool": NODE_ENV == "development" ? "cheap-inline-module-source-map" : null,
  "plugins": [
    new webpack.DefinePlugin({
      "NODE_ENV": JSON.stringify(NODE_ENV)
    }),
    new webpack.optimize.UglifyJsPlugin({
      "minimize": true,
      "compress": { warnings: false }
    })
  ],
  "module": {
    "loaders": [{
      "test": /\.js$/,
      "loaders": ["babel?presets[]=es2015"],
      "exclude": /\/node_modules\//,
    }],
    "noParse": /angular\/angular.js/
  }
}
