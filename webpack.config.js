const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const CopyPlugin = require('copy-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const env = process.env.NODE_ENV;
const envPath = path.resolve(`./.env.${env}`);
const isProduction = env === 'production';

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                },
            },
            {
                test: /\.svg$/,
                loader: 'svg-url-loader',
            },
            {
                test: /\.(css)$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
            {
                test: /\.(png)$/i,
                loader: 'file-loader',
            },
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
        ],
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json', '.css', '.png', '.scss'],
    },
    entry: './src/index.js',
    output: {
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
    },
    devtool: isProduction ? 'none' : 'eval-cheap-source-map',
    devServer: {
        contentBase: './dist',
        port: 1234,
        host: '0.0.0.0',
        historyApiFallback: true,
    },
    plugins: [
        new CleanWebpackPlugin({ cleanStaleWebpackAssets: false }),
        new HtmlWebpackPlugin({
            template: './index.html',
            title: 'Development',
        }),
        new CopyPlugin({
            patterns: [{ from: 'public', to: 'public/' }],
            options: {
                concurrency: 100,
            },
        }),
        new Dotenv({
            path: path.resolve(envPath),
        }),
        isProduction && new CompressionPlugin(),
    ].filter(Boolean),
    optimization: {
        removeAvailableModules: true,
        mergeDuplicateChunks: false,
    },
};
