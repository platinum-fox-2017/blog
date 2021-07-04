import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import Home from '@/components/Home.vue'
import Article from '@/components/Article.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/home',
      meta: { auth: true },
      name: 'Home',
      component: Home
    },
    {
      path: '/article/:id',
      meta: { auth: true },
      name: Article,
      component: Article,
      props: true
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.name === 'Home') {
    if (localStorage.getItem('tokenJWT')) {
      next()
    } else {
      console.log('masuk')
      next({
        name: 'Login'
      })
    }
  } else {
    next()
  }
})

export default router
