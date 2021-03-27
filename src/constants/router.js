import { lazy } from 'react'


const routes = [
  {
    path: '/',
    name: 'dashboard',
    isSub: false,
    component: lazy(() => import('@/pages/Home/Home')),
    meta: { title: 'dashboard', icon: 'DashboardOutlined', permission: 'dashboard' },
    children: [],
  },
  {
    path: '/mobile-representatives',
    name: 'mobileRepresentatives',
    isSub: false,
    component: lazy(() => import('@/pages/MobileRepresentatives/MobileRepresentatives')),
    meta: { title: 'mobile.representatives', icon: 'MobileOutlined', permission: 'mobileRepresentatives' },
    children: [],
  },
  {
    path: '/orders',
    name: 'orders',
    isSub: false,
    component: lazy(() => import('@/pages/Orders/Orders')),
    meta: { title: 'orders', icon: 'ShoppingOutlined', permission: 'orders' },
    children: [],
  },
  {
      path: '/settings',
      name: 'settings',
      isSub: true,
      // component: lazy(() => import('@/pages/Settings/Settings')),
      meta: { title: 'settings', icon: 'SettingOutlined', permission: 'settings' },
      children: [
        {
          path: '/settings/geofence',
          name: 'geofence',
          isSub: false,
          component: lazy(() => import('@/pages/Settings/Geofence/Geofence')),
          meta: { title: 'geofence', icon: '', permission: 'settings' },
          children: [],
        },
        {
          path: '/settings/branches',
          name: 'branches',
          isSub: false,
          component: lazy(() => import('@/pages/Settings/Branches/Branches')),
          meta: { title: 'branches', icon: '', permission: 'settings' },
          children: [],
        },
        {
          path: '/settings/timeslots',
          name: 'timeslots',
          isSub: false,
          component: lazy(() => import('@/pages/Settings/Timeslots/Timeslots')),
          meta: { title: 'timeslots', icon: '', permission: 'settings' },
          children: [],
        },
      ]
    },
  // {
  //   path: '/celebrity',
  //   name: 'celebrity',
  //   isSub: false,
  //   component: lazy(() => import('@/pages/Celebrity/List')),
  //   meta: { title: 'celebrity', icon: 'UserOutlined', permission: 'celebrity' },
  //   children: [
  //     {
  //       path: '/celebrity/create',
  //       name: 'CelebrityCreate',
  //       component: lazy(() => import('@/pages/Celebrity/Create')),
  //       meta: { title: 'celebrity', icon: 'UserOutlined', permission: 'celebrity' },
  //       children: []
  //     }
  //   ],
  // },
  // {
  //   path: '/category',
  //   name: 'category',
  //   isSub: false,
  //   component: lazy(() => import('@/pages/Category/List')),
  //   meta: { title: 'category', icon: 'AppstoreOutlined', permission: 'category' },
  //   children: [
  //     {
  //       path: '/category/create',
  //       name: 'CategoryCreate',
  //       component: lazy(() => import('@/pages/Category/Create')),
  //       meta: { title: 'category', icon: 'AppstoreOutlined', permission: 'category' },
  //       children: []
  //     }
  //   ],
  // },
  // {
  //   path: '/featured',
  //   name: 'featured',
  //   isSub: false,
  //   component: lazy(() => import('@/pages/Featured/List')),
  //   meta: { title: 'featured', icon: 'AppstoreOutlined', permission: 'featured' },
  //   children: [
  //     {
  //       path: '/featured/create',
  //       name: 'FeaturedCreate',
  //       component: lazy(() => import('@/pages/Featured/Create')),
  //       meta: { title: 'featured', icon: 'AppstoreOutlined', permission: 'featured' },
  //       children: []
  //     }
  //   ],
  // },
  // {
  //   path: '/clients',
  //   name: 'clients',
  //   isSub: false,
  //   component: lazy(() => import('@/pages/Clients/Clients')),
  //   meta: { title: 'clients', icon: 'UserOutlined', permission: 'clients' },
  //   children: [],
  // },
  {
    path: '/404',
    name: '404',
    component: lazy(() => import('@/pages/statuses/404')),
    hidden: true,
    meta: { title: '404', permission: '404' },
    children: [],
  },
]

export default routes
