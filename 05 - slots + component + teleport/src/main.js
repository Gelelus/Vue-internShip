import { createApp } from 'vue';

import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import CardWrapper from './components/CardWrapper.vue'

const app = createApp(App);


app.component('base-badge', BaseBadge);
app.component('card-wrapper', CardWrapper)

app.mount('#app');
