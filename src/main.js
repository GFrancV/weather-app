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

const app = createApp(App).use(router).use(store).use(VueChartkick);

app.config.globalProperties.$axios = axios;

//Apis
app.config.globalProperties.$locationApi =
	"http://api.positionstack.com/v1/forward?access_key=bb714f94d77fa6c3148c4e8ade3c14a1&query=";
app.config.globalProperties.$weatherApi = "https://api.openweathermap.org/data/2.5/";
app.config.globalProperties.$rainApi = "https://api.stormglass.io/v2/weather/point?";

app.config.globalProperties.$apikey = "bb08f6848bfbc80e84d9a0ccea2c2752";
app.config.globalProperties.$apiPresipitationkey =
	"6dd60b08-3430-11ed-b34b-0242ac130002-6dd60b62-3430-11ed-b34b-0242ac130002";

app.mount("#app");
