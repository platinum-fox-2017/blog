<template>
<div class="main-page">
<header-nav :title='article.title' :description='author'></header-nav>
<article>
<div class="container">
<div class="row">
<sidebar></sidebar>
<div class="offset-md-1 col-md-8">
<p>
{{article.content}}
</p>
</div>
</div>
<div class="row">
<button @click="deteleArticle" type="button" name="button" class="btn btn-danger offset-md-9 col-md-2">Delete Post</button>
</div>
</div>
</article>
</div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'

import Sidebar from '@/components/Sidebar'
import HeaderNav from '@/components/HeaderNav'

export default{
  data () {
    return {
      article: null
    }
  },
  components: {
    Sidebar,
    HeaderNav
  },
  computed: {
    author: function () {
      return 'by ' + this.article.author
    }
  },
  props: ['id'],
  created: function () {
    this.fetchArticlesData()
  },
  methods: {
    fetchArticlesData: function () {
      axios({
        method: 'get',
        url: `http://localhost:3000/api/articles/${this.id}`
      }).then(data => {
        console.log(data)
        this.article = data.data.data
      }).catch(err => {
        console.log(err)
      })
    },
    stringDate: function (date) {
      return moment(date).format('dddd, MMMM Do YYYY, h:mm:ss a')
    },
    deteleArticle: function () {
      axios({
        method: 'delete',
        url: `http://localhost:3000/api/articles/${this.id}`
      }).then(data => {
        this.$router.push({path: '/home/article'})
      })
    }
  },
  watch: {
    id: function () {
      this.fetchArticlesData()
    }
  }
}
</script>

<style scoped>
p {
  text-align: justify;
}
</style>
