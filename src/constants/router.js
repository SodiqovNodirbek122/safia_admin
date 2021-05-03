import { lazy } from 'react'


const routes = [
  {
    path: '/',
    name: 'dashboard',
    isSub: false,
    component: lazy(() => import('@/pages/Staff/Staff')),
    meta: { title: 'staff', icon: 'UsergroupAddOutlined', permission: 'staff' },
    children: [
      {
        path: '/dismissed',
        name: 'dismissed',
        isSub: false,
        component: lazy(() => import('@/pages/Staff/Dismissed/Dismissed')),
        meta: { title: 'dismissed', icon: '', permission: 'staff' },
        children: []
      }
    ],
  },
  {
    path: '/tasks',
    name: 'dashboard',
    isSub: false,
    component: lazy(() => import('@/pages/Tasks/Tasks')),
    meta: { title: 'tasks', icon: 'UnorderedListOutlined', permission: 'staff' },
    children: [],
  },
  {
    path: '/reports',
    name: 'dashboard',
    isSub: false,
    component: lazy(() => import('@/pages/Staff/Staff')),
    meta: { title: 'reports', icon: 'ProjectFilled', permission: 'staff' },
    children: [],
  },
  {
    path: '/settings',
    name: 'dashboard',
    isSub: false,
    component: lazy(() => import('@/pages/Staff/Staff')),
    meta: { title: 'settings', icon: 'SettingFilled', permission: 'staff' },
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
