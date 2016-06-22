const webpack = require('webpack');
const path = require('path');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    entry: {
        app: path.join(__dirname, '/app/index.js'),
        vendors: ['react', 'react-dom', 'react-router', 'react-redux', 'redux']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel'
            },
            {
                test: /\.(css|scss)$/,
                exclude: path.join(__dirname, '/app/components'),
                loader: 'style!css!sass'
            },
            {
                test: /\.(css|scss)$/,
                include: path.join(__dirname, '/app/components'),
                loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]!sass'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url-loader?importLoaders=1&limit=1000&name=/fonts/[name].[ext]'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.json', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js', Infinity),
        new TransferWebpackPlugin([
            {from: 'assets'}
        ], path.resolve(__dirname, 'app'))
    ]
};
