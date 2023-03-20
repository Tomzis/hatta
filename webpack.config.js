const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "test.js",
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
      filename: "[name].css",
    }),
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
