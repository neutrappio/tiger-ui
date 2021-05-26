import { createRouter, createWebHashHistory } from 'vue-router'

const publicRoutes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/modules/index/pages/Index.vue'),
    meta: {
      layout: 'Default',
      menu: 'Member'
    }
  },
]


const authRoutes = [
  {
    path: '/auth/login',
    name: 'login',
    component: () => import('@/modules/auth/pages/Login.vue'),
    meta: {
      title: 'Login',
      layout: 'Auth'
    }
  },
  { path: "/auth/:pathMatch(.*)*", redirect: "/auth/login" },
]


const privateRoutes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/modules/dashboard/pages/Dashboard.vue'),
    meta: {
      title: 'Dashboard',
      layout: 'Dashboard'
    }
  },
  {
    path: '/account/settings',
    name: 'account-settings',
    component: () => import('@/modules/account/pages/Settings.vue'),
    meta: {
      title: 'Account Settings',
      layout: 'Dashboard'
    }
  }
]


const routes = [...publicRoutes, ...privateRoutes, ...authRoutes].map(_route => {
  return _route;
});

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router