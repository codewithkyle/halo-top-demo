const path = require('path');

module.exports = {
	entry: {
		shop: path.join(__dirname, '/react/shop.tsx'),
	},
	mode: 'development',
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'babel-loader',
				options: { presets: ['@babel/env'] },
			},
			{
				test: /\.tsx?$/,
				exclude: /(node_modules|bower_components)/,
				loader: 'ts-loader',
			},
			{
				test: /\.css$/,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
	resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'public/react'),
	},
};
