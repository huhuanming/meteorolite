const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'build');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

module.exports = {
    // Entry points to the project
    entry: [
        'webpack/hot/dev-server',
        'webpack/hot/only-dev-server',
        path.join(__dirname, '/app/index.js')
    ],
    // Server Configuration options
    devServer: {
        contentBase: buildPath,
        devtool: 'eval',
        hot: true,
        inline: true,
        colors: true,
        progress: true,
        port: 1888,
        host: 'localhost',
        historyApiFallback: true
    },
    devtool: 'eval',
    output: {
        path: buildPath,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.(js|jsx)$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/
            },
            {
                test: /\.(css|scss)$/,
                exclude: path.join(__dirname, '/app/components'),
                loader: 'style!css!sass?sourceMap=true'
            },
            {
                test: /\.(css|scss)$/,
                include: path.join(__dirname, '/app/components'),
                loader: 'style!css?modules&localIdentName=[name]__[local]___[hash:base64:5]!sass?sourceMap=true'
            },
            {
                test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/,
                loader: 'url-loader?importLoaders=1&limit=1000&name=/fonts/[name].[ext]'
            }
        ]
    },
    resolve:{
        extensions: ['', '.js', '.json', '.jsx']
    },
    plugins: [
        // Enables Hot Modules Replacement
        new webpack.HotModuleReplacementPlugin(),
        // Allows error warnings but does not stop compiling.
        new webpack.NoErrorsPlugin(),
        // Moves files
        new TransferWebpackPlugin([
            {from: 'assets'}
        ], path.resolve(__dirname, 'app'))
    ]
};
