import Vue from 'vue';
import Router from 'vue-router';
import ArticleDescription from '@/components/ArticleDescription';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/:id',
      name: 'Description',
      props: true,
      component: ArticleDescription,
    },
  ],
});
