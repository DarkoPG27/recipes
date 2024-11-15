import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import RecipeDetail from "../views/RecipeDetail.vue";
import CuisineRecipeList from "../views/CuisineRecipeList.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      /*  component: () => import('../views/AboutView.vue'), */
    },
    {
      path: "/cuisine/:id",
      name: "cuisine",
      component: CuisineRecipeList,
    },
    {
      path: "/:id",
      name: "detail",
      component: RecipeDetail,
    },
  ],
});

export default router;
