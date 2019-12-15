import $ from '../../api';
import path from '../../api/path';

export default {
    state: {
        menu: '',
    },
    getters: {

    },
    mutations: {
        SET_MENU(state, menu) {
            state.menu = menu;
        }
    },
    actions: {
        async getMenu({commit}, params={}) {
            const data = await $.post(path.menu, params);
            commit('SET_MENU', data.list);

            return data;
        }
    },
}