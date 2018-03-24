<template>
  <div class="col-md-9">
    <!-- <h1>{{categories}}</h1>
    <h1>{{articles}}</h1>
    <h1>{{articles[0]}}</h1>
    <div v-for="(category,idx) in categories" :key="idx">
      <div v-for="(article,index) in articles" :key="index">
        <div v-if="article._id == $route.params.id">
          {{categories}}
          <div class="well">
            <div class="col-xs-6 col-md-3">
              <span>{{ category.name }}</span>
            </div>
            <div class="col-xs-6 col-md-9">
              <span>{{ article.title }}</span>
            </div>
          </div>
          <div class="jumbotron">
            <h3>{{ article.description }}</h3>
          </div>
        </div>
      </div>
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex' 
export default {
  data () {
    return {
      category: []
    }
  },
  // computed: {
  //   ...mapGetters(
  //     { categories: 'getCategories'},
  //     { articles: 'getArticles'}
  //   )
  // }
}
</script>

<style scoped>
</style>
