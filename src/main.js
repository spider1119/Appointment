import Vue from "vue";
import App from "./App.vue";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";

import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";

import {
  faPlus,
  faMinus,
  faTrash,
  faCheck
} from "@fortawesome/free-solid-svg-icons";

import router from '@/router'
import store from '@/store'

library.add(faPlus, faMinus, faTrash, faCheck);

Vue.config.productionTip = false;

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
