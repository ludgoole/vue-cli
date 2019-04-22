// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  outputDir: 'dist',
  assetsDir: 'static',

  filenameHashing: true,
  productionSourceMap: true,
  
  devServer: {
		host: 'localhost',
		port: 8000,
		open: true,
		hot: true, // 热更新
	}
}