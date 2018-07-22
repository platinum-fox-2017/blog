<template>
  <div>
    <div v-for="(article, i) in articles" :key='i'>
      <article-tile :article="article"></article-tile>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ArticleTile from '@/components/ArticleTile'
export default {
  components: {
    ArticleTile
  },
  computed: {
    ...mapGetters({
      articles: 'getArticles'
    })
  }
}
</script>

<style scoped>
</style>
