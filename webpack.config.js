const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    To - Do - list - interactive - list
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
        }),
    ],
    output: {
        filename: 'bundle.js',
        publicPath: "/webpack-demo/",
        path: path.resolve(index.html, 'dist'),
        clean: true,
    },
    optimization: {
        runtimeChunk: 'single',
    },
    {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
    },
],
},
};