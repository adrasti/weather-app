const path = require("path");
const common = require("./webpack.common");
const {merge} = require("webpack-merge");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const cssMinimizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = merge(common, {
    mode: "production",
    output: {
        filename: "main.[contenthash].js",
        path: path.resolve(__dirname, "dist"),
        assetModuleFilename: "images/name.[hash][ext]"
    },
    optimization: {
        minimizer: [
            new cssMinimizerWebpackPlugin(),
            new TerserPlugin(),
            new HtmlWebpackPlugin({
                template: "./src/template.html",
                minify: {
                    removeAttributeQuotes: true,
                    collapseWhitespace: true,
                    removeComments: true
                }
            })

        ]
    },
    plugins: [
                new CleanWebpackPlugin(), 
                new MiniCssExtractPlugin({filename: "[name].[contenthash].css"})
            ],
    module: {
        rules: [
            {
                test: /\.(svg|png|jpg|gif)$/,
                type: "asset/resource",
            },
            {
                test: /\.css$/,
                use: 
                [
                    MiniCssExtractPlugin.loader, 
                    "css-loader"
                ]
            },
        ]
    }
});