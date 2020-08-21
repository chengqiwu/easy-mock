import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export function createRouter () {
  const router = new Router({
    mode: 'history',
    routes: [
      { path: '/login', name: 'login', component: () => import('pages/login') },
      { path: '/log-out', name: 'logOut', component: () => import('components/log-out') },
      {
        path: '/',
        name: 'layout',
        component: () => import('components/layout/index'),
        children: [
          { path: '/', name: 'project', component: () => import('pages/project') },
          { path: 'workbench', name: 'project', component: () => import('pages/project') },
          { path: 'group/:id', name: 'project', component: () => import('pages/project') },
          { path: 'group', name: 'group', component: () => import('pages/group') },
          { path: 'docs', name: 'docs', component: () => import('pages/docs') },
          { path: 'changelog', name: 'docs', component: () => import('pages/docs') },
          { path: 'dashboard', name: 'dashboard', component: () => import('pages/dashboard') },
          { path: 'profile', name: 'profile', component: () => import('pages/profile') },
          { path: 'new', name: 'new', component: () => import('pages/new') },
          { path: 'project/:id', name: 'detail', component: () => import('pages/project-detail') },
          { path: 'editor/:projectId', name: 'editor', component: () => import('pages/editor') },
          { path: 'editor/:projectId/:id', name: 'editor', component: () => import('pages/editor') }
        ]
      }
    ]
  })

  return router
}
