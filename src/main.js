import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";

// 导入页面组件
import Home from "./views/Home.vue";
import NewsDetail from "./views/NewsDetail.vue";

// 路由配置
const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/news/:id", name: "NewsDetail", component: NewsDetail },
  {
    path: "/research/medical-agents",
    name: "MedicalAgents",
    component: () => import("./views/MedicalAgents.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      // Home also restores anchors after mounting; restore history after that
      // existing transition so returning from a direction page keeps the place.
      return new Promise((resolve) => {
        window.setTimeout(() => resolve(savedPosition), 350);
      });
    }

    if (to.hash) {
      const headerHeight = document.querySelector("header.sigma_header")?.getBoundingClientRect().height || 80;
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      return { el: to.hash, top: Math.ceil(headerHeight) + 16, behavior: reducedMotion ? "auto" : "smooth" };
    }

    return { top: 0, left: 0 };
  },
});

const app = createApp(App);
app.use(router);
app.mount("#app");
