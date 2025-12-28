const { merge } = require('webpack-merge');
const common = require('./common.js');

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: {
			directory: './dist',
		},
		host: '0.0.0.0',
		port: 8080,
		hot: true
	}
});
