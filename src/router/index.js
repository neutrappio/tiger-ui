import { createRouter, createWebHashHistory } from 'vue-router'

/**
 * Public Routes
 */

const ErrorPages = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/modules/errors/pages/Page404.vue'),
  },
  { path: '/:pathMatch(.*)*', redirect: '/404' },
]


const publicRoutes = [
  {
    path: '/',
    redirect: "/dashboard"
  },
  ...ErrorPages
]

/**
 * Auth Routes
 */
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

/**
 * Private routes
 */
const privateRoutes =
  [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/modules/dashboard/pages/Dashboard.vue'),
      meta: {
        title: 'Dashboard',
        layout: 'Dashboard',
        icon: "HomeIcon",
        navigation: true
      }
    },
    ...[
      {
        name: 'services',
        path: "/services",
        component: () => import('@/modules/dashboard/pages/Dashboard.vue'),
        meta: {
          title: "Services",
          icon: "DatabaseIcon"
        },
      },
      {
        name: 'nodes',
        path: "/nodes",
        component: () => import('@/modules/dashboard/pages/Dashboard.vue'),
        meta: {
          title: "Nodes",
          icon: "ServerIcon"
        },
      },
      {
        name: 'regions',
        path: "/regions",
        component: () => import('@/modules/dashboard/pages/Dashboard.vue'),
        meta: {
          title: "Regions",
          icon: "GlobeIcon"
        },
      },
      {
        name: 'eggs',
        path: "/eggs",
        component: () => import('@/modules/dashboard/pages/Dashboard.vue'),
        meta: {
          title: "Eggs",
          icon: "BeakerIcon"
        },
      },
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



/**
 * Routes Export
 */

export const routes = [...publicRoutes, ...privateRoutes, ...authRoutes].map(_route => {
  return _route;
});


/**
 * Router Export
 */
export const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes
})

export default router