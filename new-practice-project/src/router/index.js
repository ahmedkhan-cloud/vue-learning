import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import AboutPage from "../components/AboutPage.vue";

const routes = [
  { path: "/", component: HelloWorld, meta: { requiresAuth: true } },
  { path: "/about", component: AboutPage },
  { path: "/home", redirect: "/" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && localStorage.getItem("auth") !== "true") {
    next("/login");
  } else {
    next();
  }
});
export default router;
