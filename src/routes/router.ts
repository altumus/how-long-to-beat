import * as vueRouter from 'vue-router'

const _routes:Array<vueRouter.RouteRecordRaw> = [
  {
    path: '/',
    component: {},
  }
]

const router = vueRouter.createRouter({
  history: vueRouter.createWebHistory(),
  routes: _routes
})

export default router