const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractSass = new ExtractTextPlugin({
    filename: 'css/[name].css'
})


module.exports = {
    entry: path.resolve(__dirname, './login/main.jsx'),
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'build/login')
    },
    plugins: [
        new webpack
            .optimize
            .CommonsChunkPlugin({
                name: 'login.vendor',
                minChunks: function (module) {
                    return module.context && module
                        .context
                        .indexOf('node_modules') !== -1
                }
            }),
        extractSass
    ],
    resolve: {
        modules: [
            'node_modules'
        ],
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