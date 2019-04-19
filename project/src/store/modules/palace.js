import $ from '@/api/fench'
import path from '@/api/path'
import util from '@/util'

export default {
    state: { 
        meta: 'palace',
        list: []
    },
    getters: { 
        
    },
    mutations: { 
        getList(state, list) {
            state.list = list
        }
    },
    actions: { 
        getList({commit}, params) {
            $.get(path.getList, params).then(res =>{
                console.log(res)
                commit('getList', res.data.poiInfos)
            })
        }
    }
}