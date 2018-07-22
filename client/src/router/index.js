import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import FullArticle from '@/components/FullArticle'
import NewArticle from '@/components/NewArticle'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home'
    },
    {
      path: '/newarticle',
      component: NewArticle,
      name: 'NewArticle'
    },
    {
      path: '/:id',
      name: 'FullArticle',
      component: FullArticle,
      props: true
    }
  ]
})
