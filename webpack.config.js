//这是nodejs的一个核心module，叫path，https://nodejs.org/api/path.html
const path = require('path');
// 通过 npm 安装
const HtmlWebpackPlugin = require('html-webpack-plugin');
// 用于访问内置插件
const webpack = require('webpack');

module.exports = {
	mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module: {
        rules: [
        		{ test: /\.txt$/, use: 'raw-loader'},
        		{ test: /\.css$/, use: 'css-loader' },
      			{ test: /\.ts$/, use: 'ts-loader' }
        	]
    },
    plugins: [
        new HtmlWebpackPlugin({ template: './src/index.html' })
    ]

}


