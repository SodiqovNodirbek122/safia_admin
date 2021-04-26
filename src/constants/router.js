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
    path: '/404',
    name: '404',
    component: lazy(() => import('@/pages/statuses/404')),
    hidden: true,
    meta: { title: '404', permission: '404' },
    children: [],
  },
]

export default routes
