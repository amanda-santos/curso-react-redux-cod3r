const webpack = require('webpack')

// modo de produção ou desenvolvimento
const modoDev = process.env.NODE_ENV !== 'production'

// minimizando arquivos js, css, etc
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
    // modo de produção ou desenvolvimento
    mode: modoDev ? 'development' : 'production',
    entry: './src/principal.js',
    // caminho do bundle gerado
    output: {
        filename: 'principal.js',
        path: __dirname + '/public'
    },
    // criando um web server
    devServer: {
        contentBase: "./public",
        port: 9000
    },
    // minimizando arquivos js, css, etc
    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    // minimizando arquivo css e extraindo para um arquivo diferente no bundle
    plugins: [
        new MiniCssExtractPlugin({
            filename: "estilo.css"
        })
    ],
    // carregando css, scss, sass e imagens para o bundle
    module: {
        rules: [{
            test: /\.s?[ac]ss$/,
            use: [
                MiniCssExtractPlugin.loader,
                // 'style-loader', // Adiciona CSS a DOM injetando a tag <style>
                'css-loader', // interpreta @import, url()...
                'sass-loader',
            ]
        }, {
            test: /\.(png|svg|jpg|gif)$/,
            use: ['file-loader']
        }]
    }
}