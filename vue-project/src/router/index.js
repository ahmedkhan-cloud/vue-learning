import { createRouter, createWebHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import CallingApi from "../components/CallingApi.vue";
import NewComponent from "../components/NewComponent.vue";
import SlotPractive from "../components/SlotPractive.vue";
import user from "../components/user.vue";
import dashboard from "../components/dashboard.vue";
import profile from "../components/profile.vue";
import setting from "../components/setting.vue";
import Dashboardmain from "../components/dashboardmain.vue";
import NotFound from "../components/NotFound.vue";

const routes = [
  { path: "/", component: HelloWorld },
  { path: "/home", redirect: "/" },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
  { path: "/calling-api", component: CallingApi },
  { path: "/new-component", component: NewComponent },
  { path: "/user/:id", component: user },
  {
    path: "/dashboard",
    component: dashboard,
    meta: { requiresAuth: true },
    children: [
      {
        path: "profile",
        component: profile,
      },
      {
        path: "",
        component: Dashboardmain,
      },
      {
        path: "setting",
        component: setting,
      },
    ],
  },
  { path: "/slot-practice", component: SlotPractive },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const isLoggedIn = localStorage.getItem("auth") !== "true";
  if (to.meta.requiresAuth && !isLoggedIn) {
    next("/");
  } else {
    next();
  }
});

export default router;
