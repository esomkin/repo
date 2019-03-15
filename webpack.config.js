const path      = require('path');
const webpack   = require('webpack');

module.exports = {

    output: {

        path: path.resolve(__dirname, './public/build/'),
        publicPath: '/build/',
        filename: '[name].js',
        chunkFilename: '[name].js',
    },
    module: {

        rules: [{

            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {

                loader: 'babel-loader',
            },
        }],
    },
	devServer: {

		host: 'repo',
		port: 8080,
	},
};