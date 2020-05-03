// vue.config.js
const webpack = require('webpack')

module.exports = {
  // 出口
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',
  filenameHashing: true,
  productionSourceMap: true,

  // 插件
  chainWebpack: config => {
    config
      .plugin('povide')
      .use(webpack.ProvidePlugin, [{ _: 'lodash', LocalForage: 'localforage' }])
  },

  // 服务
  devServer: {
    host: 'localhost',
    port: 8080,
    open: true,
    hot: true, // 热更新
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000', // 设置你调用的接口域名和端口号
        changeOrigin: true, // 跨域
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  }
}
