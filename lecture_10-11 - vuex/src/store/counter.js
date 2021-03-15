export default {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state, number) {
            console.log(this.increment)
            // setTimeout(function(){
            //     state.counter = state.counter + (number || 1)
            // }, 2000)

            state.counter = state.counter + (number || 1)

        },
        decrement(state, number) {
            state.counter = state.counter + (-number || -1)

        }
    },
    getters: {
        finalCounter(state, _getters, _rootState, _rootGetters) {
            return state.counter * 2
        }
    },
    actions: {
        increment(context, _payload) {
            console.log(context) // 
            setTimeout(function () {
                context.commit("increment")
            }, 2000)
        }
    }
}