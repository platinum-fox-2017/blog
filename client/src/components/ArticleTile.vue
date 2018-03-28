<template>
  <router-link :to="{ name: 'FullArticle', params: { id: article._id }}" class="box">
    <div class="article" v-if="article">
      <h3>{{article.title}}</h3>
      <p>{{articlePreview}}</p>
    </div>
    <div v-else>
      <p>loading</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['article'],
  computed: {
    articlePreview: function () {
      if (this.article.description.length > 500) {
        return this.article.description.slice(0, 487) + '...'
      } else {
        return this.article.description
      }
    }
  },
  watch: {
  }
}
</script>

<style scoped>
.box {
  text-decoration: none;
}
.article {
  cursor: pointer;
  margin-top: 5px;
  margin-bottom: 5px;
  color: darkslategray;
}
.article:hover {
  box-shadow: 0px 0px 185px -43px rgba(0,0,0,0.4);
}
</style>
