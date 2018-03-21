<template>
    <div id="main" class="container">
        <h1>news</h1>
        <navbar
          :articles="articles"
        ></navbar>
        <articles
            :articles="articles"
        ></articles>
    </div>
</template>
<script>

import Axios from 'axios';
import Navbar from '@/components/Navbar';
import Articles from '@/components/Articles';

export default {
  name: 'Main',
  components: {
    Navbar,
    Articles,
  },
  data() {
    return {
      articles: [],
    };
  },
  methods: {
    getArticles() {
      Axios.get('http://localhost:3000/articles/')
        .then((articles) => {
          this.articles = articles.data.data;
        });
    },
  },
  created() {
    this.getArticles();
  },
};
</script>

<style>
    #main {
        margin-top: 60px;
        padding-top: 16px;
    }

    h1 {
        font-family: 'Permanent Marker', cursive;
    }

    #main>h1 {
        margin-left: 306px;
        font-size: 40px;
    }
</style>
