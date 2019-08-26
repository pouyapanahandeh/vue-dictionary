import Vue from 'vue'


export const state = () => ({
    userType:'normal',
    darkMode:false,
})

export const mutations = {
    setUserType (state, utype) {
        Vue.set(state, 'userType', utype)
    },
    setDarkMode (state, val) {
        Vue.set(state, 'darkMode', val)
    }
}

export const getters = {
    userType (state) {
        return state.userType
    },
    darkMode (state) {
        return state.darkMode
    }
}

export const actions = {
    setUserType({commit, state, getters, dispatch}, payload) {
        commit('setUserType', payload)
        commit('setDarkMode', payload === 'admin')
    },
    setDarkMode({commit, state, getters, dispatch}, payload) {
        commit('setDarkMode', payload)
    },
}
