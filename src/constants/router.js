import { lazy } from 'react'

const routes = [
  {
    path: '/',
    name: 'dashboard',
    isSub: false,
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'dashboard',
      icon: 'HomeOutlined',
      permission: 'staff',
    },
    children: [
      // {
      //   path: '/dismissed',
      //   name: 'dismissed',
      //   isSub: false,
      //   component: lazy(() => import('@/pages/Staff/Dismissed/Dismissed')),
      //   meta: { title: 'dismissed', icon: '', permission: 'staff' },
      //   children: [],
      // },
    ],
  },
  {
    path: '/orders',
    name: 'Orders',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'orders',
      icon: 'ShoppingOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/templates',
    name: 'Templates',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'templates',
      icon: 'SketchOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/products',
    name: 'Products',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'products',
      icon: 'SketchOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/marketing',
    name: 'Marketing',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'marketing',
      icon: 'NotificationOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/fulfillment-balance',
    name: 'Fulfillment Balance',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'fulfillmentBalance',
      icon: 'SketchOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/uploaded-files',
    name: 'Uploaded Files',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'uploadedFiles',
      icon: 'FolderOpenOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/return-request',
    name: 'Return Request',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'returnRequest',
      icon: 'FastBackwardOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/return',
    name: 'Return',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'return',
      icon: 'RollbackOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/product-reviews',
    name: 'Product Reviews',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'productReviews',
      icon: 'StarOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/sales-history',
    name: 'Sales History',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'salesHistory',
      icon: 'HistoryOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/history-of-the-commission',
    name: 'History Of The Commission',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'historyOfTheCommission',
      icon: 'FileTextOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/receipt-history',
    name: 'Receipt History',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'receiptHistory',
      icon: 'HistoryOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/questions-and-answers',
    name: 'Questions And Answers',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'questionsAndAnswers',
      icon: 'MessageOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/support',
    name: 'Support',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'support',
      icon: 'TeamOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/profile-management',
    name: 'Profile Management',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'profileManagement',
      icon: 'UserOutlined',
      permission: 'staff',
    },
    children: [],
  },
  {
    path: '/store-setup',
    name: 'Store Setup',
    component: lazy(() => import('@/pages/dashboard')),
    meta: {
      title: 'storeSetup',
      icon: 'SettingOutlined',
      permission: 'staff',
    },
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
