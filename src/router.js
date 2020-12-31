import Vue from 'vue'
import Router from 'vue-router'

import topPage from './components/topPage'
import questionnairePage from './components/questionnairePage'
import contentPage from './components/contentPage'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: topPage,
      name: 'topPage'
    },
    {
      path: '/questionnairePage',
      component: questionnairePage,
      name: 'questionnairePage'
    },
    {
      path: '/contentPage',
      component: contentPage,
      name: 'contentPage'
    }
  ]
})