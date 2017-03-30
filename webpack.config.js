const path = require('path');
const webpack = require('webpack');

module.exports = {
	// context: path.join(__dirname, 'dist'),
	devtool: 'cheap-module-source-map',
	entry:  [
		'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
		// 'webpack-hot-middleware/client',
		'./index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		// OccurenceOrderPlugin is needed for webpack 1.x only
		new webpack.HotModuleReplacementPlugin(),
		new webpack.NoEmitOnErrorsPlugin()
	],
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: [
					'babel-loader',
				],
			},
		],
	},
	resolve: {
		modules: [
			path.join(__dirname, 'node_modules'),
		],
	}
};
