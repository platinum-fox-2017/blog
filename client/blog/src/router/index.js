import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/Home'
import Article from '@/components/pages/Article'
import Recent from '@/components/pages/Recent'
import ArticleItem from '@/components/article/ArticleItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/base',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/article',
      component: Article,
      children: [
        {
          path: ':articleId',
          name: 'ArticleItem',
          props: true,
          component: ArticleItem
        }
      ]
    },
    {
      path: '/recent',
      name: 'Recent',
      component: Recent
    }
  ]
})
