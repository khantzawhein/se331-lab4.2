import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from "./routes";
import {createPinia} from "pinia";
import 'nprogress/nprogress.css'
const pinia = createPinia()
createApp(App).use(router).use(pinia).mount('#app')
