var path = require("path");
var pack = require("./package.json");
var webpack = require("webpack");
const VueLoaderPlugin = require("vue-loader/lib/plugin");

var PROD = process.env.NODE_ENV === "production";
var TEST = process.env.NODE_ENV === "test";

var config = {
  entry: path.resolve("index.js"),
  output: {
    path: path.resolve("."),
    filename: "bundle.js",
    library: "EmojiMart",
    libraryTarget: "umd"
  },

  externals: [],

  module: {
    rules: [
      {
        test: /\.js$/,
        include: [path.resolve(".")],
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.vue$/,
        include: [path.resolve(".")],
        use: {
          loader: "vue-loader"
        }
      },
      {
        test: /\.css$/,
        use: ["vue-style-loader", "css-loader", "postcss-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: {
          loader: "url-loader",
          options: {
            limit: 10000
          }
        }
      }
    ]
  },

  resolve: {
    extensions: [".vue", ".js", ".json"]
  },

  plugins: [new VueLoaderPlugin()],

  bail: true,

  mode: "development",
  devtool: "inline-source-map",
  watch: true,
  devServer: {
    inline: true
  }
};

module.exports = config;
