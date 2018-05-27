const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');


var webpackConfig = {
    context: __dirname,
    entry: {
        bundle: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, 'public/build'),
        filename: 'bundle.js'
    },
    devtool: '#cheap-module-source-map',
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                }
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        'css-loader', 
                        'sass-loader',
                        'postcss-loader'
                    ]
                })
            },
            // {
            //     test: /\.jsx?$/,
            //     exclude: [/node_modules/],
            //     loader: "babel-loader",
            //     query: {
            //         presets: ['es2015', 'react', 'stage-0', 'stage-1']
            //     }
            // },
            // {
            //     test: /\.scss$/,
            //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader!resolve-url!sass-loader?sourceMap')
            // },
            // {
            //     test: /\.css$/,
            //     loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
            // },
            {
                test: /\.woff2?$|\.ttf$|\.eot$|\.svg$|\.png|\.jpe?g|\.gif$/,
                loader: 'file-loader'
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('bundle.css')
    ]
};

module.exports = webpackConfig;