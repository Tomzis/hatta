const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({ filename: "index.html", template: "./index.html" }),
    new HtmlWebpackPlugin({
      filename: "./about/index.html",
      template: "./about/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "./articles/index.html",
      template: "./articles/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "./gallery/index.html",
      template: "./gallery/index.html",
    }),
    new HtmlWebpackPlugin({
      filename: "./contact/index.html",
      template: "./contact/index.html",
    }),
    new HtmlWebpackPlugin({ filename: "error.html", template: "./error.html" }),
    new MiniCssExtractPlugin({ filename: "[name].[contenthash].css" }),
  ],
  devServer: {
    compress: true,
    host: "localhost",
    port: 9000,
    static: {
      directory: path.join(__dirname, "./"),
    },
  },
};
