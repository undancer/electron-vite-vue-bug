import {createApp} from 'vue'
import App from './App.vue'
import './samples/node-api'
import router from "./routers";

createApp(App)
    .use(router)
    .mount('#app')
    .$nextTick(window.removeLoading)
