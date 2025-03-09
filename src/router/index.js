import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/menu",
      name: "menu",
      component: () => import("../views/menu/MenuView.vue"),
    },
    {
      path: "/menu/featured",
      name: "featured",
      component: () => import("../views/menu/FeaturedView.vue"),
    },
    {
      path: "/menu/previous",
      name: "previous",
      component: () => import("../views/menu/PreviousView.vue"),
    },
    {
      path: "/menu/favorites",
      name: "favorites",
      component: () => import("../views/menu/FavoritesView.vue"),
    },
    {
      path: "/rewards",
      name: "rewards",
      component: () => import("../views/RewardsView.vue"),
    },
    {
      path: "/gift",
      name: "gift",
      component: () => import("../views/Gifts/GiftCardsView.vue"),
    },
    {
      path: "/gift/create-egift",
      name: "createGift",
      component: () => import("../views/Gifts/CreateGift.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition; // Keeps scroll position when navigating back
    } else {
      return { top: 0 }; // Scrolls to top when switching views
    }
  },
});

export default router;
