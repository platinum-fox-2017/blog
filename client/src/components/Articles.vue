<template>
    <div id="article">
        <img src="@/assets/hr.png">
    </div>
</template>

<script>
import ArticleDescription from '@/components/ArticleDescription';

export default {
  props: ['articles'],
  name: 'articles',
  components: {
    ArticleDescription,
  },
};
</script>

<style>
    #article, #article>img {
        width: 804px;
        float: right;
    }
</style>
