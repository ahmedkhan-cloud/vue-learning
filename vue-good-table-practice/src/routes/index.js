import { createRouter, createWebHistory } from "vue-router";
import Table from "../views/Table.vue";
import NotFound from "../views/NotFound.vue";
import Login from "../views/Login.vue";

const routes = [
  { path: "/", meta: { requiresAuth: true }, component: Table },
  { path: "/home", redirect: "/" },
  { path: "/table", redirect: "/" },
  { path: "/dashboard", redirect: "/" },
  { path: "/:pageMatch(.*)*", component: NotFound },
  { path: "/login", component: Login },
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
