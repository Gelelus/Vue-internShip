import { createStore } from 'vuex'
import counter from './counter'

export default createStore({
    modules: {
        counter // numbers: counter
    },
    state() {
        return {
            globalOption: 0
        }
    },
    mutations: {
    },
    getters: {
    },
    actions: {
    }
})