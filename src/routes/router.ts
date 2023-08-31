import * as vueRouter from "vue-router";

const _routes: Array<vueRouter.RouteRecordRaw> = [
  {
    path: "/",
    component: () => import("@/components/MainPage.vue"),
  },
  {
    path: "/search",
    component: () => import("@/components/SearchPage.vue"),
  },
  {
    path: "/:catchAll(.*)",
    component: () => import("@/components/NotFoundPage.vue"),
  },
];

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes: _routes,
});

export default router;
