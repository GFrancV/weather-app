import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//Bootstrap
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

import axios from "axios";

//Charts
import VueChartkick from "vue-chartkick";
import "chartkick/chart.js";

//Toast notifications
import Toaster from "@meforma/vue-toaster";

const app = createApp(App).use(router).use(store).use(VueChartkick).use(Toaster);

app.config.globalProperties.$axios = axios;

//Apis
app.config.globalProperties.$locationApi =
	"http://api.positionstack.com/v1/forward?access_key=bb714f94d77fa6c3148c4e8ade3c14a1&query=";
app.config.globalProperties.$weatherApi = "https://api.openweathermap.org/data/2.5/";

app.config.globalProperties.$apikey = "bb08f6848bfbc80e84d9a0ccea2c2752";

app.mount("#app");
