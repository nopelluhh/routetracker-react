const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const BrowserSyncPlugin = require('browser-sync-webpack-plugin')

const extractSass = new ExtractTextPlugin({
    filename: '[name].css',
    disable: process.env.NODE_ENV === 'development'
})

module.exports = {
    entry: path.resolve(__dirname, './public/main.jsx'),
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'build/login')
    },
    plugins: [
        // new BrowserSyncPlugin({     // browse to http://localhost:3000/ during
        // development,     // ./public directory is being served     host: 'localhost',
        //     port: 3000,     proxy: 'http://localhost:8081'     //server: { baseDir:
        // ['public'] } }),
        new webpack
            .optimize
            .CommonsChunkPlugin({
                name: 'vendor',
                minChunks: function (module) {
                    // this assumes your vendor imports exist in the node_modules directory
                    return module.context && module
                        .context
                        .indexOf('node_modules') !== -1
                }
            }),
        extractSass
    ],
    resolve: {
        modules: [
            path.resolve(__dirname, 'public'),
            'node_modules'
        ],
        alias: {
            rt: path.resolve(__dirname, 'public'),
            mod: path.resolve(__dirname, 'public/modules')
        },
        extensions: ['.js', '.json', '.jsx']
    },
    module: {
        rules: [
            // preloaders
            {
                enforce: 'pre',
                test: /\.scss/,
                loader: 'import-glob-loader'
            },

            // loaders
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|public\/libs)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['latest', {'modules': false}], 'react'
                            ],
                            plugins: ['transform-class-properties']
                        }

                    }
                ]
            }, {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        'css-loader', {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [path.resolve(__dirname, './node_modules')]
                            }
                        }
                    ]
                })
            }, {
                test: /\.woff[2]?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&minetype=application/font-woff'
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }, {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    }

}