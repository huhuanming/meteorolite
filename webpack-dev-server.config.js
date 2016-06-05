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
        contentBase: 'app/public',
        devtool: 'eval',
        hot: true,
        inline: true,
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
                test: /\.js$|\.jsx$/,
                loaders: ['react-hot', 'babel-loader'],
                exclude: /node_modules/
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
