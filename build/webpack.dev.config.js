var path = require('path');
var webpack = require('webpack');
// var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var merge = require('webpack-merge')
var webpackBaseConfig = require('./webpack.base.config.js');
var FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')


module.exports = merge(webpackBaseConfig, {
    entry: {
        main: './pages/main',
        vendors: ['vue', 'vue-router']
    },
    output: {
        path: path.join(__dirname, '../pages/dist'),
        publicPath: '',
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    resolve: {
        alias: {
            iview: '../../src/index',
            vue: 'vue/dist/vue.js'
        }
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({ name: 'vendors', filename: 'vendor.bundle.js' }),
        new HtmlWebpackPlugin({
            inject: true,
            filename: path.join(__dirname, '../pages/dist/index.html'),
            template: path.join(__dirname, '../pages/index.html')
        }),
        new FriendlyErrorsPlugin()
    ]
});
