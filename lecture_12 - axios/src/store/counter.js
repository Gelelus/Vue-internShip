export default {
    namespaced: true,
    state() {
        return {
            counter: 0
        }
    },
    mutations: {
        increment(state, number) {

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
            
            return state.counter
        }
    },
    actions: {
        async increment(context, _payload) {
            // let request = fetch("https://jsonplaceholder.typicode.com/todos/1").then(data => data.json()).then(data => {
            //     console.log(data)
            //     context.commit("increment", data.userId)
            // })
            // const rawRequest = await fetch("/todos/1")
            // const data = await rawRequest.json()
            // console.log(data)
            // context.commit("increment", data.userId)
            const response = await this.axios.get("todos/1")
            console.log(response)
            const data = response.data
            context.commit("increment", data.userId)
        }
    }
}