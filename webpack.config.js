var webpack = require('webpack');
var path = require('path');
var debug = process.env.NODE_ENV !== 'production';

module.exports = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: "./src/js/root.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
    publicPath: "/src/"
  },

  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader",
      include: __dirname,
      query: {
        presets: [ "es2015", "react" ],
        plugins: ['react-html-attrs'], //添加组件的插件配置
      }
    },
      //下面是使用 ant-design 的配置文件
      { test: /\.css$/, loader: 'style-loader!css-loader' }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ],

};