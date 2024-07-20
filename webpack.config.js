const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist',
        watchFiles: ['./src/*.html', "./dist/**/*"],
    },
    plugins: [
        new HtmlWebpackPlugin ({
            title: "To Do List",
            template:'./src/index.html'
        })
    ],
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", 'css-loader']
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(svg|jpg|webp)$/i,
                type: 'asset/resource',
            },
            
        ]
    }
}