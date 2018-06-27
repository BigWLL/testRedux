/**
 * Created by xiaohe on 2018/5/7.
 */
var path = require('path');
var webpack = require('webpack');

module.exports = {
    mode: 'development',
    cache: true,
    entry: {
        app: [path.join(__dirname, './index.js'),
            'webpack-dev-server/client?http://localhost:8080/'
        ]
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
        publicPath: "dist"
    },
    devServer: {
        contentBase: path.resolve(__dirname, './'),
        host: 'localhost',
        historyApiFallback: true,
        // compress: true,
        inline: true,
        hot: true,
        port: 8080,
        open: false,
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(css|sass|less)$/,
                use: [ 'style-loader', 'css-loader' ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};