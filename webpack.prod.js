const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");

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
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
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
    new CopyPlugin({
      patterns: [
        { from: "./favicon", to: "favicon" },
        { from: "./img", to: "img" },
      ],
    }),
  ],
};
