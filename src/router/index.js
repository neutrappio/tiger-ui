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
    name: 'Login',
    component: () => import('@/modules/auth/pages/Login.vue'),
    meta: {
      layout: 'Auth'
    }
  },
  {
    path: '/auth/register',
    name: 'Register',
    component: () => import('@/modules/auth/pages/Register.vue'),
    meta: {
      layout: 'Auth'
    }
  },
  {
    path: '/auth/confirmation',
    name: 'Confirmation',
    component: () => import('@/modules/auth/pages/Confirmation.vue'),
    meta: {
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
      layout: 'HeaderLayout'
    }
  },
  {
    path: '/account/settings',
    name: 'Account Settings',
    component: () => import('@/modules/account/pages/Settings.vue'),
    meta: {
      layout: 'HeaderLayout'
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