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


const privateRoutes =
  [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/modules/dashboard/pages/Dashboard.vue'),
      meta: {
        title: 'Dashboard',
        layout: 'Dashboard',
        navigation: true
      }
    },
    ...[
      {
        name: 'account-settings',
        path: '/account/settings',
        component: () => import('@/modules/account/pages/Settings.vue'),
        meta: {
          title: 'Account Settings',
          navigation: false,
          profile: true,
        }
      },
      {
        name: 'nodes',
        path: "/nodes",
        component: () => import('@/modules/dashboard/pages/Dashboard.vue'),
        meta: {
          title: "Nodes",
        },
      },
      {
        name: 'services',
        path: "/services",
        component: () => import('@/modules/dashboard/pages/Dashboard.vue'),
        meta: {
          title: "Services",
        },
      },
      {
        name: 'eggs',
        path: "/eggs",
        component: () => import('@/modules/dashboard/pages/Dashboard.vue'),
        meta: {
          title: "Eggs",
        },
      },
    ].map(route => {
      route.path = `/app${route.path}`;
      route.meta = {
        layout: 'Dashboard',
        navigation: true,
        menu: false,
        ...route.meta
      };
      return route;
    })
  ].map(route => { return { ...route, meta: { ...route.meta, private: true } } });


export const routes = [...publicRoutes, ...privateRoutes, ...authRoutes].map(_route => {
  return _route;
});

export const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router