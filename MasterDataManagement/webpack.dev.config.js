const Merge = require('webpack-merge');
const CommonConfig = require('./webpack.common.config.js');
const webpack = require('webpack');

module.exports = Merge(CommonConfig, {
    devtool: "cheap-module-eval-source-map",
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('dev')
            }
        })
    ]
})
