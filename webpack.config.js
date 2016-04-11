var webpack = require('webpack');
var path = require('path');


var config = {
	devtool: 'eval',
	entry: [
		'webpack-dev-server/client?http://localhost:3000',
	    'webpack/hot/only-dev-server',
		'./src/js/index'
	],
	output: {
		path: path.join(__dirname, 'dist'),
		filename: 'bundle.js',
		publicPath: '/static/'
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	],
	module: {
		loaders: [
			{
				test: /\.js$/,
				loaders: ['react-hot', 'babel'],
				include: path.join(__dirname, 'src/js')
			}
		]
	}

}

module.exports = config;