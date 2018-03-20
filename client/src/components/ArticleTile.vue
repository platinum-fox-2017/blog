<template>
  <router-link :to="{ name: 'FullArticle', params: { id: article._id }}" class="box">
    <div class="article">
      <h3>{{article.title}}</h3>
      <p>{{article.description}}</p>
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['article'],
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
