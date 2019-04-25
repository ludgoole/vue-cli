import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'

// 引入全局样式
import './assets/style/reset.css'
import './assets/style/rem.scss'
import './assets/style/flex.scss'

// 引入mockjs
import './mock'  
// require('./api/mock')

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
