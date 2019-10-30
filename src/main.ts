import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import users from "./store/modules/users";
import { API, setJWT } from "./utils/api";

Vue.config.productionTip = false;

const token = localStorage.getItem("token");

if (token) {
  setJWT(token)
  users.updateProfile();
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
