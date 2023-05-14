const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const ReactRefreshPlugin = require('@pmmmwh/react-refresh-webpack-plugin')

module.exports = ({ mode = 'production' }) => {
    const isProd = mode === 'production';
    const isDev = !isProd;

    const cssLoaders = () => {
        const loaders = [
            MiniCssExtractPlugin.loader,
            {
                loader: 'css-loader',
                options: {
                    modules: {
                        auto: true,
                        localIdentName: isDev
                            ? '[name]-[local]-[hash:base64:7]'
                            : '[hash:base64]',
                    },
                }
            },
            'postcss-loader'
        ];

        return loaders;
    };

    return {
        mode: mode,
        entry: './src/index.tsx',
        devtool: 'inline-source-map',
        output: {
            publicPath: '/',
            path: path.resolve(__dirname, './build'),
            filename: 'build.js'
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js'],
            alias: {
                '~scss/variables': path.resolve(__dirname, './src/assets/styles/utilities/variables.scss'),
                '~scss/mixins': path.resolve(__dirname, './src/assets/styles/utilities/mixins.scss'),
                '~scss/share': path.resolve(__dirname, './src/assets/styles/share'),
                '~': path.resolve(__dirname, './src'),
            },
        },
        devServer: {
            hot: true,
            open: false,
            port: 3001,
            historyApiFallback: true,
        },
        infrastructureLogging: {
            level: 'error',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ['babel-loader'],
                },
                {
                    test: /\.(ts|tsx)?$/,
                    exclude: /node_modules/,
                    use: ['ts-loader'],
                },
                {
                    test: /\.css$/,
                    exclude: /node_modules/,
                    use: cssLoaders(),
                },
                {
                    test: /\.(scss|sass)$/,
                    exclude: /node_modules/,
                    use: [...cssLoaders(), 'sass-loader'],
                },
                {
                    test: /\.(jpeg|png)$/,
                    exclude: /node_modules/,
                    use: ['url-loader', 'file-loader'],
                },
            ]
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new MiniCssExtractPlugin(),
            new ReactRefreshPlugin(),
        ],
    };
};
