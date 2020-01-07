const path = require('path');

const basePath = path.join(__dirname, 'templates/frameworks/react');

module.exports = {
	entry: {
		shop: path.join(basePath, 'shop/index.tsx'),
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
				test: /\.s[ac]ss$/i,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: { extensions: ['*', '.js', '.jsx', '.ts', '.tsx'] },
	output: {
		filename: '[name].js',
		path: path.join(__dirname, 'public/react'),
	},
};
