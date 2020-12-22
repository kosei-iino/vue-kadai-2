import Vue from 'vue'
import Router from 'vue-router'

import TopPage from './components/TopPage'
import QuestionnairePage from './components/QuestionnairePage'
import contentPage from './components/contentPage'


Vue.use(Router)



export default new Router({
  mode: "history",
  routes:[
    {
      path: '/',
      component: TopPage,
      name: 'TopPage'
    },
    {
      path: '/QuestionnairePage',
      component: QuestionnairePage,
      name: 'QuestionnairePage'
    },
    {
      path: '/contentPage',
      component: contentPage,
      name: 'contentPage'
    }
  ]
})


