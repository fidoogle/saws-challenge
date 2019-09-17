import Router from "vue-router";
import App from "@/App";
import Search from "@/components/Search";
import Favorites from "@/components/Favorites";

export default new Router({
  routes: [
    {
      path: "/",
      component: App,
      children: [
        {
          path: "",
          component: Search
        },
        {
          path: "/favorites",
          component: Favorites
        }
      ]
    }
  ]
});
