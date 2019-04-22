import Vue from 'vue'
import Vuex from 'vuex'
import palace from './modules/palace'
Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        palace
    }
})