import Vue from "vue";
import Router from "vue-router";
import store from "@/store";
import router from "@/router";
import App from "@/App.vue";
import vuetify from "@/plugins/vuetify";
import "vuetify/dist/vuetify.css";

Vue.config.productionTip = false;
Vue.use(Router);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");
