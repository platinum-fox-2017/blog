<template>
<div class="main-page">
<header-nav :title="title" :description="description"></header-nav>
<div class="container">
<div class="row">
<div class="col-md-8 mx-auto">
<div class="article" v-for="(article,i) in articles" :key='i'>
<div class="post-preview">
<router-link :to="{ name: 'ArticleMain', params: { id: article._id }}">
<h2 class="post-title">
{{article.title}}
</h2>
</router-link>
<p class="post-meta">Posted by
<a>{{article.author}}</a>
on {{stringDate(article.createdAt)}}</p>
</div>
<hr>
</div>
</div>
</div>
</div>
</div>
</template>

<script>
import moment from 'moment'
import axios from 'axios'

import HeaderNav from '@/components/HeaderNav'

export default {
  name: 'ArticleList',
  components: {
    HeaderNav
  },
  data () {
    return {
      articles: [],
      title: 'Madiun',
      description: 'write and share stories that matter'
    }
  },
  created: function () {
    this.fetchArticlesData()
  },
  methods: {
    fetchArticlesData: function () {
      axios({
        method: 'get',
        url: 'http://localhost:3000/api/articles'
      }).then(data => {
        console.log(data)
        this.articles = data.data.data.map(val => val)
      }).catch(err => {
        console.log(err)
      })
    },
    stringDate: function (date) {
      return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a')
    }
  }
}
</script>

<style scoped>

.post-preview > a {
  color: #212529;
}

.post-preview > a:focus, .post-preview > a:hover {
  text-decoration: none;
  color: #0085A1;
}

.post-preview > a > .post-title {
  font-size: 30px;
  margin-top: 30px;
  margin-bottom: 10px;
}

.post-preview > a > .post-subtitle {
  font-weight: 300;
  margin: 0 0 10px;
}

.post-preview > .post-meta {
  font-size: 18px;
  font-style: italic;
  margin-top: 0;
  color: #868e96;
}

.post-preview > .post-meta > a {
  text-decoration: none;
  color: #212529;
}

@media only screen and (min-width: 768px) {
  .post-preview > a > .post-title {
    font-size: 36px;
  }
}
</style>
