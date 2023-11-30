import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0e9811a0 = () => interopDefault(import('..\\pages\\About.vue' /* webpackChunkName: "pages/About" */))
const _782f822c = () => interopDefault(import('..\\pages\\Articles.vue' /* webpackChunkName: "pages/Articles" */))
const _c3e080fa = () => interopDefault(import('..\\pages\\Contact.vue' /* webpackChunkName: "pages/Contact" */))
const _13691ea7 = () => interopDefault(import('..\\pages\\Projects.vue' /* webpackChunkName: "pages/Projects" */))
const _be0c9bd6 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/About",
    component: _0e9811a0,
    name: "About"
  }, {
    path: "/Articles",
    component: _782f822c,
    name: "Articles"
  }, {
    path: "/Contact",
    component: _c3e080fa,
    name: "Contact"
  }, {
    path: "/Projects",
    component: _13691ea7,
    name: "Projects"
  }, {
    path: "/",
    component: _be0c9bd6,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
