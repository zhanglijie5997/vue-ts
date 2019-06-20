const path = require('path');
const CompressionPlugin = require("compression-webpack-plugin");

// 配置自定义根路径
function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    baseUrl: './',
    assetsDir: 'static',
    publicPath: './',
    outputDir: process.env.NODE_ENV === 'development' ? 'devdist' : 'dist',// 不同的环境打不同包名
    devServer: {
        hot: true,
        port: '8081',
        open: true,
        https: false,
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/api': {
                target: 'http://192.168.1.146:8091',
                ws: false,
                changOrigin: true,
                pathRewrite: {
                    "^/api": "" //需要rewrite的,
                }
            }
        },
    },
    parallel: require('os').cpus().length > 1, // 是否为 Babel 或 TypeScript 使用 thread-loader。该选项在系统的 CPU 有多于一个内核时自动启用，仅作用于生产构建
    // postcss-px2rem配置
    lintOnSave: false,
    productionSourceMap: false,  // 生产环境下css 分离文件

    css: {
        loaderOptions: {
            postcss: {
                plugins: [
                    require('postcss-px2rem')({ 
                        remUnit: 15, 
                    
                    }), // 换算的基数
                ]
                
            },

            sass: {
                data: `@import "./src/assets/hotcss/px2rem.scss";`
            },
            css: {
                localIdentName: '[name]-[hash]',
                camelCase: 'only'
            }
        }
    },

    chainWebpack: (config) => {
        config.resolve.alias
            .set('@', resolve('./src'))  // key,value自行定义，比如.set('@@', resolve('src/components'))
            .set('static', resolve('./src/static'))
            .set('components', resolve('./src/components'))
        // 静态资源处理
        config.module
            .rule('images')
            .use('url-loader')
            // .set('exclude',[resolve('./node_modules')])
            .loader('url-loader')
            .tap(options => Object.assign(options, { limit: 10240 }))
    },
    // 扩展库
    configureWebpack: config => {

        if (process.env.NODE_ENV === 'production') {
            // mutate config for production...

            return {

                externals: {
                    /**
                    *key: main.js中全局引入的路径
                    *value: 全局暴露出来的对象名
                    */
                    "vue-router": "VueRouter",
                    "vuex": "Vuex",
                    "axios": "axios",
                    "vue": "Vue",
                    "vant":"vant"
                },


                plugins: [new CompressionPlugin({
                    test: /\.js$|\.html$|\.css/g,//匹配文件夹名称
                    threshold: 10240,// 对超过10kb的进行压缩
                    deleteOriginalAssets: false //是否删除源文件
                })]
            }
        } else {
            // mutate for development...
            return {
                output: {
                    libraryExport: 'default'
                }
            }

        }
    }

}