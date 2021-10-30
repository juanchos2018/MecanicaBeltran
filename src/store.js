import Vue from 'vue'
import Vuex from 'vuex'

import Input from './modules/Input'
import Output from './modules/Output'


Vue.use(Vuex)

const modules = {

    Input,
    Output

}

const state = {
    sidebarShow: 'responsive',
    sidebarMinimize: false
}

const mutations = {
    toggleSidebarDesktop(state) {
        const sidebarOpened = [true, 'responsive'].includes(state.sidebarShow)
        state.sidebarShow = sidebarOpened ? false : 'responsive'
    },
    toggleSidebarMobile(state) {
        const sidebarClosed = [false, 'responsive'].includes(state.sidebarShow)
        state.sidebarShow = sidebarClosed ? true : 'responsive'
    },
    set(state, [variable, value]) {
        state[variable] = value
    }
}

export default new Vuex.Store({
    state,
    mutations,
    modules
})