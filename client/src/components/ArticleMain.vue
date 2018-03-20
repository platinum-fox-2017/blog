<template>
<article>
<div class="container">
<div class="row">
<sidebar></sidebar>
<div class="offset-md-1 col-md-8">
<h2>
{{article.title}}
</h2>
<p>
{{article.content}}
</p>
</div>
</div>
</div>
</article>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Sidebar from '@/components/Sidebar'

export default{
  data () {
    return {
      article: {}
    }
  },
  components: {
    Sidebar
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
    }
  }
}
</script>

<style scoped>

</style>
