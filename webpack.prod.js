const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "production",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "app.[contenthash].js",
    clean: true,
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
    new HtmlWebpackPlugin({ filename: "about.html", template: "./about.html" }),
    new HtmlWebpackPlugin({
      filename: "articles.html",
      template: "./articles.html",
    }),
    new HtmlWebpackPlugin({
      filename: "gallery.html",
      template: "./gallery.html",
    }),
    new HtmlWebpackPlugin({
      filename: "contact.html",
      template: "./contact.html",
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
};
