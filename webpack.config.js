const debug   = process.env.NODE_ENV !== 'production'
const webpack = require('webpack')
const path    = require('path')

module.exports = {
    // context : path.join(__dirname, 'src'),
    // devtool: debug ? "inline-sourcemap" : false,
    entry: './src/index.js',
    output: {
        path     : path.resolve(__dirname, 'dist'),
        filename : 'bundle.js'
    },
    module: {
        rules: [
            { 
                test: /\.css$/,
                use: [
                    { loader: 'style-loader' },
                    { loader: 'css-loader' }
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            }, {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: 'babel-loader'
                // query: {
                //     presets: ['react', 'es2015', 'stage-0'],
                //     plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties']
                // }
            }
        ]
    },
    plugins: debug ? [] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false })
    ]
}
