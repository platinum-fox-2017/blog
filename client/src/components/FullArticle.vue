<template>
  <div class="row">
    <div class="col-md-12" v-if="isLoading">
      <div class="loader"></div>
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
  methods: {
    generateArticle () {
      this.isLoading = true
      let apptoken = localStorage.getItem('apptoken')
      axios.get('http://localhost:3000/articles/' + this.id, {headers: {apptoken: apptoken}}).then(({data}) => {
        this.article = data.article
        this.isLoading = false
      })
    }
  },
  created () {
    this.generateArticle()
  },
  watch: {
    id () {
      this.generateArticle()
    }
  }
}
</script>

<style>
.description {
  margin-top: 30px;
}
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}
.loader {
  margin: auto;
  margin-top: 50px;
  width: 50%;
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #a6a9ad;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
