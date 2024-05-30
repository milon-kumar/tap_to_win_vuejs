import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {VueQrcodeReader} from 'vue-qrcode-reader'
import router from "./router/routes.js";


const app = createApp(App);
app.use(VueQrcodeReader)
app.use(router)
app.mount("#app");