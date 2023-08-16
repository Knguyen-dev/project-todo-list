const path = require("path");
const isBrowser = typeof window !== "undefined";
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "none",
  entry: {
	index: "./src/index.js",
	modules: "./src/modules.js",
 },
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      // For loading CSS
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      // For google's variable icon fonts
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
    ],
  },
  plugins: isBrowser
    ? [
        new HtmlWebpackPlugin({
          template: "./src/index.html",
        }),
      ]
    : [],
};