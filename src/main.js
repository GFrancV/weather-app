import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";

import axios from "axios";

const app = createApp(App).use(router).use(store);

const url = "https://api.openweathermap.org/data/2.5";
axios.defaults.baseURL = url;
app.config.globalProperties.$axios = axios;
app.config.globalProperties.$apikey = "bb08f6848bfbc80e84d9a0ccea2c2752";

app.mount("#app");
