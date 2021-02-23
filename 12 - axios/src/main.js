import { createApp } from 'vue';

import VuexStore from './store/index'
// import VueAxios from 'vue-axios'
import SettingAxios from './plugins/axios'
import App from './App.vue';

const app = createApp(App);
SettingAxios(VuexStore)

app
.use(VuexStore)
// .use(VueAxios, axios)

app.mount('#app');
