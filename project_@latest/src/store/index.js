import Vue from 'vue'
import Vuex from 'vuex'
import axios from '@/api'
import path from '@/api/path'
import { exportAll } from '@/util'

const modules = exportAll(require.context('./modules', false, /\.js$/), { namespaced: true })
const { post } = axios
const { getMenu } = path
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu: []
  },
  mutations: {
    SET_MENU (state, menu) {
      state.menu = menu
    }
  },
  actions: {
    async getMenu ({ commit }, payload) {
      const res = await post(getMenu, payload)
      commit('SET_MENU', res)
      return res
    }
  },
  modules
})
