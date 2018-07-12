"use strict";
var path = require('path');
var webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: {
        main: './ngModules/app.module.js'
    },
    output: {
        path: path.join(__dirname, 'WebPackBuild'),
        filename: '[name].js',
        publicPath: '/'
    },
    devServer: {
        contentBase: ".",
        host: "localhost",
        port: 9000
    },
    resolve: {
        extensions: ['.js', '.jsx'],
        modules: [
            path.join(__dirname),
            "node_modules"
        ]
    },
    module: {
        rules: [
            {
                test: /\.js?$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            }
        ]
    }
};