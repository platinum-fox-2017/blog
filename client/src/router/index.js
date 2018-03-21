import Vue from 'vue'
import Router from 'vue-router'
import Article from '@/components/Article.vue'
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/article',
      component: Article,
      children: [
        {path: ':id', component: Article}
      ]
    }
  ]
})
