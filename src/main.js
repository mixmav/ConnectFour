import { createApp } from 'vue';
import './sass/app.scss';
import { store } from './store/store';
import mitt from 'mitt';
import App from './App.vue';

const emitter = mitt();
const app = createApp(App);

app.use(store);
app.config.globalProperties.emitter = emitter;
app.mount('#app');
