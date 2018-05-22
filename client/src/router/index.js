import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import LoginUser from '@/components/LoginUser'
import ArticlesForm from '@/components/ArticlesForm'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/newarticle',
      name: 'ArticlesForm',
      component: ArticlesForm
    },
    {
      path: '/article/:id',
      name: 'ArticlesEdit',
      component: ArticlesForm
    },
    {
      path: '/login',
      name: 'LoginUser',
      component: LoginUser
    }
  ]
})
