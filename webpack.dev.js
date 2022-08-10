const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge (common, {
    mode: "development",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/[name][ext]"
    },
    plugins: [new HtmlWebpackPlugin({
        template: "./src/template.html",
        inject: "head",
        scriptLoading: "defer"
    })],
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: "asset/resource",
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
        ]
    }
});