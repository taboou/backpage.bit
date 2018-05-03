const debug   = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path    = require('path')

const HtmlWebpackPlugin       = require('html-webpack-plugin')
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    // title    : 'TESTING!!! Free classifieds - backpage0.bit',
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
                test : /\.css$/,
                use  : [
                    { loader : 'style-loader' },
                    { loader : 'css-loader' }
                ]
            }, {
                test    : /\.js$/,
                exclude : /node_modules/,
                use     : 'babel-loader'
            }, {
                test    : /\.jsx?$/,
                exclude : /node_modules/,
                use     : 'babel-loader'
                // query: {
                //     presets: ['react', 'es2015', 'stage-0'],
                //     plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
                // }
            }
        ]
    },
    plugins : debug ? [
        HtmlWebpackPluginConfig
    ] : [
        HtmlWebpackPluginConfig,
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
}
