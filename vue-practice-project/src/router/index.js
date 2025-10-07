import { createRouter, createWebHistory } from "vue-router";
import NotFound from "../views/NotFound.vue";
import Login from "../views/Login.vue";
import Dashboard from "../views/Dashboard.vue";
import TaskList from "../views/TaskList.vue";
import DashboardView from "../components/DashboardView.vue";

const routes = [
  { path: "/:pathMatch(.*)*", component: NotFound },
  { path: "/home", redirect: "/" },
  { path: "/login", component: Login },
  { path: "/", redirect: "/dashboard" },
  {
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true },
    children: [
      { path: "tasks-list", component: TaskList },
      { path: "", component: DashboardView },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth && localStorage.getItem("auth") !== true) {
    next("/login");
  } else {
    next();
  }
});

export default router;
