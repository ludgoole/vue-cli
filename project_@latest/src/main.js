import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from './api'

// 引入element
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

// 引入style
import './assets/style/reset.css'
import './assets/style/common.less'
import './assets/style/layout.less'

Vue.config.productionTip = false

// 引入axios
Vue.prototype.$axios = axios

// 引入element
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
