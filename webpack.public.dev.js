const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const host = process.env.HOST || 'localhost'
const devPort = process.env.port + 1 || 8081

const extractSass = new ExtractTextPlugin({
    filename: 'css/[name].css',
    //disable: process.env.NODE_ENV === 'development'
})

const chunkPlugin = new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    minChunks: function(module) {
        // this assumes your vendor imports exist in the node_modules directory
        return module.context && module
            .context
            .indexOf('node_modules') !== -1
    }
})

module.exports = {
    stats: {
        chunksSort: 'size'
    },
    entry: [
        'whatwg-fetch',
        'react-hot-loader/patch', 
        `webpack-dev-server/client?http://${host}:${devPort}`,
        //'webpack/hot/only-dev-server',
        './public/main.jsx'],
    output: {
        filename: 'js/[name].js',
        path: path.resolve(__dirname, 'build'),
        publicPath: `http://${host}:${devPort}/assets/`
    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './public',
        publicPath: `http://${host}:${devPort}/assets/`,
        public: `${host}:${devPort}`,
        host: host,
        open: true,
        inline: true,
        historyApiFallback: true,
        hotOnly: true,
        proxy: {
            '/api': `http://${host}:8080`
        }
    },
    node: {
        fs: 'empty'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        chunkPlugin,
        extractSass,
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
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['latest', { 'modules': false }], 'react'
                        ],
                        plugins: ['react-hot-loader/babel','transform-class-properties', 'transform-object-rest-spread']
                    }

                }]
            }, {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [
                        'css-loader', {
                            loader: 'sass-loader',
                            options: {
                                includePaths: [path.resolve(__dirname, './node_modules')],
                                publicPath: ''
                            }
                        }
                    ]
                })
            }, {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff2&name=css/[name][hash:7]we.[ext]',
                options: {
                    outputPath: 'css/',
                    publicPath: '/assets/css/',
                    limit: 10000
                }
            }, {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader?&name=[name].[ext]',
                options: {
                    outputPath: 'css/',
                    limit: 10000
                }
            }, {
                test: /\.html$/,
                loader: 'raw-loader'
            }
        ]
    }

}
