import { createApp } from 'vue'; // Correct for Vue 3
import App from './App.vue';
import router from './router';

createApp(App).use(router).mount('#app');
