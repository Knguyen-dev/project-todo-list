const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    mode: "development",
    entry: {
        bundle: path.resolve(__dirname, "src/index.js"),
    },
    output: {
        filename: "[name][contenthash].js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
        // Let the images from src keep their names in dist
        assetModuleFilename: "[name][ext]",
        publicPath: "/project-todo-list/",
    },
    devtool: "source-map",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "dist"),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
    },

    module: {
        rules: [
            // For loading CSS
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            // For babel loader
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-env"],
                    },
                },
            },
            // Assets resouce loader: for loading images and whatnot
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "Todo List",
            filename: "index.html",
            template: "src/template.html",
        }),
    ],
};
