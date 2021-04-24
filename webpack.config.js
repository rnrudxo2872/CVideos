const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const mode = process.env.WEBPACK_ENV;

module.exports = {
    mode,

    //파일은 path.resolve로,
    entry: ["@babel/polyfill", path.resolve(__dirname, 'assets', 'js', 'main.js')],
    output: {
        filename: '[name].js', //파일이 있는 경로
        
        //폴더는 path.join으로,
        path: path.join(__dirname, 'static') //변환된 파일이 저장될 경로
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                use: ['babel-loader']
            },
            {
                test: /\.(scss)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader',
                    {
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "autoprefixer",
                                        {
                                            overrideBrowserslist: "cover 99.5%"
                                        },
                                    ],
                                ],
                            },
                        },
                    },
                    'sass-loader'
                ],
            },
        ],
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    devtool: "source-map"
};