import { lazy } from 'react'


const routes = [
  {
    path: '/',
    name: 'dashboard',
    isSub: false,
    component: lazy(() => import('@/pages/Home/Home')),
    meta: { title: 'staff', icon: 'UsergroupAddOutlined', permission: 'dashboard' },
    children: [],
  },
  {
    path: '/tasks',
    name: 'dashboard',
    isSub: false,
    component: lazy(() => import('@/pages/Home/Home')),
    meta: { title: 'tasks', icon: 'UnorderedListOutlined', permission: 'dashboard' },
    children: [],
  },
  {
    path: '/reports',
    name: 'dashboard',
    isSub: false,
    component: lazy(() => import('@/pages/Home/Home')),
    meta: { title: 'reports', icon: 'ProjectFilled', permission: 'dashboard' },
    children: [],
  },
  {
    path: '/settings',
    name: 'dashboard',
    isSub: false,
    component: lazy(() => import('@/pages/Home/Home')),
    meta: { title: 'settings', icon: 'SettingFilled', permission: 'dashboard' },
    children: [],
  },
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
