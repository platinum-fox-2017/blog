import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import Home from '@/components/Home'
import SignUp from '@/components/SignUp'
import AddPost from '@/components/AddPost'
import EditPost from '@/components/EditPost'
import ArticleMain from '@/components/ArticleMain'
import ArticleList from '@/components/ArticleList'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/masuk',
      name: 'SignIn',
      component: SignIn
    }, {
      path: '/daftar',
      name: 'Daftar',
      component: SignUp
    }, {
      path: '/add',
      name: 'Add Post',
      component: AddPost
    }, {
      path: '/edit',
      name: 'Edit Post',
      component: EditPost
    }, {
      path: '/',
      component: Home,
      children: [
        {
          path: 'article/:id',
          name: 'ArticleMain',
          props: true,
          component: ArticleMain
        }, {
          path: '/',
          name: 'ArticleList',
          component: ArticleList
        }
      ]
    }
  ]
})
