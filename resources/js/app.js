// require('./bootstrap');

import {createApp} from 'vue';

import Home from './modules/Home';

const app = createApp({});

app.component('home', Home);

app.mount('#app');
