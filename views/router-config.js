import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const docs = () => import(/* webpackChunkName: 'docs' */ 'pages/docs')
const login = () => import(/* webpackChunkName: 'login' */ 'pages/login')
const group = () => import(/* webpackChunkName: 'group' */ 'pages/group')
const editor = () => import(/* webpackChunkName: 'editor' */ 'pages/editor')
const project = () => import(/* webpackChunkName: 'project' */ 'pages/project')
const profile = () => import(/* webpackChunkName: 'profile' */ 'pages/profile')
const createProject = () => import(/* webpackChunkName: 'new' */'pages/new')
const logOut = () => import(/* webpackChunkName: 'log-out' */ 'components/log-out')
const dashboard = () => import(/* webpackChunkName: 'dashboard' */ 'pages/dashboard')
const detail = () => import(/* webpackChunkName: 'project-detail' */ 'pages/project-detail')
const layout = () => import(/* webpackChunkName: 'index' */ 'components/layout/index')

export function createRouter () {
  const router = new Router({
    mode: 'history',
    routes: [
      { path: '/login', name: 'login', component: login },
      { path: '/log-out', name: 'logOut', component: logOut },
      {
        path: '/',
        name: 'layout',
        component: layout,
        children: [
          { path: '/', name: 'project', component: project },
          { path: 'workbench', name: 'project', component: project },
          { path: 'group/:id', name: 'project', component: project },
          { path: 'group', name: 'group', component: group },
          { path: 'docs', name: 'docs', component: docs },
          { path: 'changelog', name: 'docs', component: docs },
          { path: 'dashboard', name: 'dashboard', component: dashboard },
          { path: 'profile', name: 'profile', component: profile },
          { path: 'new', name: 'new', component: createProject },
          { path: 'project/:id', name: 'detail', component: detail },
          { path: 'editor/:projectId', name: 'editor', component: editor },
          { path: 'editor/:projectId/:id', name: 'editor', component: editor }
        ]
      }
    ]
  })

  return router
}
