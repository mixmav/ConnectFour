require('./bootstrap');

import Vue from 'vue';

import { store } from './store/store';
import App from './App.vue';

new Vue({
	el: '#app',
	store: store,
	render: h => h(App)
});