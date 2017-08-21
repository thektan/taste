const path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: './src/components/App.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'
	},
	module: {
		rules: [
			{
				test: /\.js?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'metal-jsx']
				}
			},
			{
				test: /\.(sass|scss)$/,
				loader: [
					'style-loader',
					'css-loader',
					'sass-loader'
				]
			}
		]
	},
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		hot: true,
		port: 9001
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};