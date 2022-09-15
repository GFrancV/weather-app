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

//Animations
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({ duration: 1000 });

const app = createApp(App).use(router).use(store).use(VueChartkick).use(Toaster);

app.config.globalProperties.$axios = axios;

//Apis
app.config.globalProperties.$locationApi =
	"https://api.opencagedata.com/geocode/v1/json?key=0905fe71d55a4103ba0148ef9d0f34ee&limit=1&no_annotations=1&q=";
app.config.globalProperties.$weatherApi = "https://api.openweathermap.org/data/2.5/";

app.config.globalProperties.$apikey = "bb08f6848bfbc80e84d9a0ccea2c2752";

app.mount("#app");
