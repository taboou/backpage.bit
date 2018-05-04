const debug   = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path    = require('path')

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const extractCSS        = new ExtractTextPlugin('./src/css/styles.css')

const HtmlWebpackPlugin       = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    title    : 'Free classifieds - backpage0.bit',
    template : './src/index.html',
    filename : 'index.html',
    inject   : 'body'
})

module.exports = {
    // context : path.join(__dirname, 'src'),
    // devtool : debug ? 'inline-sourcemap' : false,
    mode    : debug ? 'development' : 'production',
    entry   : './src/index.js',
    output  : {
        filename   : 'bundle.js',
        path       : path.resolve(__dirname, './dist'),
        // publicPath : '/'
        publicPath : '/dist'
    },
    module  : {
        rules: [
            { 
                test    : /\.css$/,
                exclude : /node_modules/,
                // use: extractCSS.extract([ 'style-loader', 'css-loader' ])
                // use  : ExtractTextPlugin.extract({
                //     fallback : 'style-loader',
                //     use      : 'css-loader'
                // })
                use     : [
                    { loader : 'style-loader' },
                    { loader : 'css-loader' }
                ]
            }, {
                test    : /\.js$/,
                exclude : /node_modules/,
                use     : 'babel-loader'
            }, {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                    {
                        loader  : 'image-webpack-loader',
                        options : { bypassOnDebug: true }
                    }
                ]
            }
        ]
    },
    plugins : debug ? [
        HtmlWebpackPluginConfig,
        // new ExtractTextPlugin('styles.css')
    ] : [
        HtmlWebpackPluginConfig,
        // new ExtractTextPlugin('styles.css'),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
}
