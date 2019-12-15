import $ from '../../api';
import path from '../../api/path';

export default {
    state: {
        token: '',
    },
    getters: {

    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        }
    },
    actions: {
        async login({commit}, params={}) {
            const data = await $.post(path.login, params);
            commit('SET_TOKEN', data.token);

            return data;
        },
    },
}