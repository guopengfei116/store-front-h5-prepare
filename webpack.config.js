2// 这个文件是webpack工具的配置文件，可以使用node的各种内置模块和写法


// 这是node的内置模块，可以直接导入使用
const path = require('path');
// 这个插件需要我们创建实例来使用，所以必须导入进来
const htmlWebpackPlugin = require('html-webpack-plugin');

// 导出一个配置对象，webpack在启动时会根据配置内容进行打包
module.exports = {

    // 打包的入口文件
    entry: './src/js/main.js',

    // 打包后文件输出
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'buld.js'
    },

    // 文件额外处理插件配置
    plugins: [

        new htmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
            inject: 'body'
        })

    ],

    module: {

        // 默认webpack只支持js模块打包，通过这里的loader配置让webpack能够把更多类型的文件转成js模块打包
        rules: [

            // css，先打包为js模块。然后自动执行生效
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },

            // less，先解析，然后打包为js模块。然后自动执行生效
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'less-loader'
                ]
            },

            // html，把模版变成js模版导出字符串
            {
                test: /\.tpl$/,
                use: [
                    'html-loader'
                ]
            },

            // 图片，先压缩，然后打包成js模块，其中小图片会转成base64，大图片仍然为url引用
            {
                test: /\.(png|jpg|gif|ttf)$/,
                use: [
                    // 大约小于10kb的图片变成base64编码继承到js中，比较大的图片仍然以url方式引入
                    { loader: 'url-loader', options: { limit: 10000 } }
                    // 'image-webpack-loader'
                ]
            },

            // 转换js脚本为es5语法
            {
                test: /\.js$/,
                // 这里面的js是第三方的，一般都是打包或解析好的文件，
                // 我们不需要进行二次处理了，所以排除掉，可以提高我们打包的效率
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015'],
                            plugins: ['transform-runtime']
                        },
                        
                    }
                ]
            },

            // 配置vue文件的解析转换
            {
                test: /\.vue$/,
                use: [
                    'vue-loader'
                ]
            }
        ]
    }
};