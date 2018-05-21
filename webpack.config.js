const debug   = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path    = require('path')

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
                use     : ['style-loader', 'css-loader']
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
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff"
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader"
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
