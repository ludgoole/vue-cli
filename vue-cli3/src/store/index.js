import Vue from 'vue'
import Vuex from 'vuex'
import {exportAll} from '../util'

Vue.use(Vuex)




const modules = exportAll(require.context('./modules', false, /\.js$/), {namespaced: true});

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules
})
