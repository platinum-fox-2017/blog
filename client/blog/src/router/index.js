import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/pages/Home'
import Article from '@/components/pages/Article'
import Post from '@/components/pages/Post'
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
      components: {
        default: Article,
        modalpost: Post
      },
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
      path: '/post',
      name: 'Post',
      component: Post
    }
  ]
})
