import Router from "vue-router";
import Search from "@/components/Search";
import Favorites from "@/components/Favorites";

export default new Router({
  routes: [
    {
      path: "",
      component: Search
    },
    {
      path: "/favorites",
      component: Favorites
    }
  ]
});
