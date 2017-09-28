const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    entry: {
        main: ['./test.js'],
    },
    output: {
        path: `${__dirname}/target`,
        filename: 'main.js',
    },
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
        }),
    ],
};
