import axios from "axios"

function setIterceptors(store) {
    axios.defaults.baseURL = "https://jsonplaceholder.typicode.com/"

    axios.interceptors.request.use(
        function (config) {
            const token = store.getters.token;
            console.log(token)
            if (token) {
                config.headers.Authorization = `Bearer ${token}`
            }
            console.log(config)
            return config
        }
    )

}

export default function SettingAxios(store) {

    setIterceptors(store)
    store.axios = axios

}