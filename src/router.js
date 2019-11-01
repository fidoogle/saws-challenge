import Router from "vue-router";
import BexarData from "@/components/BexarData";
import SAData from "@/components/SAData";
import Favorites from "@/components/Favorites";

export default new Router({
  routes: [
    {
      path: "",
      component: SAData
    },
    {
      path: "/bexar",
      component: BexarData
    },
    {
      path: "/favorites",
      component: Favorites
    }
  ]
});
