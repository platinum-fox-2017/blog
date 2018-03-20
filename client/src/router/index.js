import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SignIn from '@/components/SignIn'
import Home from '@/components/Home'
import ArticleMain from '@/components/ArticleMain'
import ArticleList from '@/components/ArticleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'SignIn',
      component: SignIn
    }, {
      path: '/help',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'article/:id',
          name: 'ArticleMain',
          props: true,
          component: ArticleMain
        }, {
          path: 'article',
          name: 'ArticleList',
          component: ArticleList
        }
      ]
    }
  ]
})
