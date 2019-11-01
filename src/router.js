import Router from "vue-router";
import SAData from "@/components/SAData";
import Favorites from "@/components/Favorites";

export default new Router({
  routes: [
    {
      path: "",
      component: SAData
    },
    {
      path: "/favorites",
      component: Favorites
    }
  ]
});
