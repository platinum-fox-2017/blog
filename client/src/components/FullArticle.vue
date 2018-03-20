<template>
  <div class="row">
    <div class="col-md-12" v-if="isLoading">
      <p>Loading . . .</p>
    </div>
    <div v-else>
      <div class="col-md-12 title">
          <h1>{{article.title}}</h1>
          <small>{{article.author.first_name}}</small>
      </div>
      <div class="col-md-12 description">
          <p>{{article.description}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'FullArticle',
  props: ['id'],
  data () {
    return {
      article: {},
      isLoading: true
    }
  },
  created () {
    let apptoken = localStorage.getItem('apptoken')
    axios.get('http://localhost:3000/articles/' + this.id, {headers: {apptoken: apptoken}}).then(({data}) => {
      this.article = data.article
      this.isLoading = false
    })
  }
}
</script>

<style>
.description {
  margin-top: 30px;
}
</style>
