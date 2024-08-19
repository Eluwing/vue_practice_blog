import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";
import Error404 from "./components/Error404.vue";

const routes = [
  {
    path: "/detail/:id",
    component: Detail,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:anything(.*)",
    component: Error404,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 