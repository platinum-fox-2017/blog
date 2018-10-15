<template>
    <div id="description">
        <p>{{article.description}}</p>
    </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
        article: null,
    };
  },
  name: 'ArticleDescription',
  created() {
      this.article = this.$store.getters.findArticleById(this.id);
  },
  watch: {
    id() {
        this.article = this.$store.getters.findArticleById(this.id);
    }
  }
};
</script>

<style>
    #description {
        width: 804px;
        float: right;
    }
</style>
