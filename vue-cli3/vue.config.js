
// vue.config.js
const webpack = require('webpack');

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
    outputDir: 'dist',
    assetsDir: 'static',

    filenameHashing: true,
    productionSourceMap: true,

    chainWebpack: config => {
        config
        .plugin('provide')
        .use(webpack.ProvidePlugin, [
            {
                localForage: 'localforage'
            }
        ]);
    },

    devServer: {
        host: 'localhost',
        port: 8888,
        open: true,
        inline: true,
        hot: true, // 热更新
        disableHostCheck: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
                pathRewrite: {'^/api' : ''}
            }
        }
    }
}