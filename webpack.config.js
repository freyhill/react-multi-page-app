/* eslint-env node */

/**
 * @file: webpack配置
 * @author: leinov
 * @date: 2018-10-08
 */

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");//生成html文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");//css分离打包
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");//js压缩
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin"); //css压缩
const htmlconfig =require("./webpackConfig/htmlconfig");
const getFilePath = require("./webpackConfig/getFilepath");
const getEntry = require("./webpackConfig/getEntry");

let entry = getEntry("./src");
let htmlarr=[];//注入html模板
getFilePath("./src").map(pathname => {
	htmlarr.push(new HtmlWebpackPlugin(htmlconfig[pathname]));
});

//主配置
module.exports = (env, argv) => ({
	entry: entry,
	output: {
		path: path.join(__dirname, "dist"),
		filename: "[name].js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader:"babel-loader",
					options:{
						presets: ["@babel/preset-env", "@babel/preset-react"]
					}
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(scss|css)$/, //css打包 路径在plugins里
				use: [
					argv.mode == "development" ? { loader: "style-loader"} :MiniCssExtractPlugin.loader,
					{ loader: "css-loader", options: { url: false, sourceMap: true } },
					{ loader: "sass-loader", options: { sourceMap: true } }
				]
			},
			{
				test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
				use:[
					{
						loader: "file-loader",
						options: {
							name: "[name]/[name].[ext]?[hash]",
							outputPath:"images/" //图片打包后路径
						}
					}
				]
			},
		],
	},
	devServer: {
		port: 3100,
		open: true,
	},
	plugins: [
		...htmlarr, //生成html插件
		new MiniCssExtractPlugin({ //分离css插件
			filename: "[name].css",
			chunkFilename: "[id].css"
		})
	],
	optimization: {
		minimizer: [//压缩js
			new UglifyJsPlugin({
				cache: true,
				parallel: true,
				sourceMap: false
			}),
			new OptimizeCSSAssetsPlugin({})
		],
		splitChunks: { //压缩css
			cacheGroups: {
				styles: {
					name: "styles",
					test: /\.css$/,
					chunks: "all",
					enforce: true
				}
			}
		}
	}
});
