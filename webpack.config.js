const webpack = require('webpack');

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
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
        }),
    ],
};
