import Vue from 'vue';
import Router from 'vue-router';
import ArticleDescription from '@/components/ArticleDescription';
import Home from '@/components/Main';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: ':id',
          name: 'Description',
          props: true,
          component: ArticleDescription,
        },
      ],
    },
  ],
});
