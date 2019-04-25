import $ from '@/api'
import path from '@/api/path'
import util from '@/util'

export default {
    state: { 
        meta: 'menu',
        menuList: []
    },
    getters: { 
        
    },
    mutations: { 
        /**
         * 
         * @param {*} state   => 状态数据 {}
         * @param {*} payload  => 菜单列表 []
         */
        getMenu(state, payload) {
            state.menuList = payload
        }
    },
    actions: { 
        /**
         * 
         * @param {*} commit   => 提交改变方法 fn
         * @param {*} params  => 请求参数 {}
         */
        getMenu({commit}, params) {
            $.post(path.getMenu, params).then(res =>{
                console.log(res)
                commit('getMenu', res)
            })
        }
    }
}