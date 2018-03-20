<template>
  <div class="row">
    <div class="col-md-9 content">
      <div v-for="(article, i) in articles" :key='i'>
          <article-tile :article="article"></article-tile>
      </div>
    </div>
    <div class="col-md-3 tracker">
    </div>
  </div>
</template>

<script>
import ArticleTile from '@/components/ArticleTile'
export default {
  props: ['articles'],
  components: {
    ArticleTile
  }
}
</script>

<style scoped>

.content {
  height: 500px;
}

.tracker {
  height: 500px;
  background-color: aqua
}
</style>
