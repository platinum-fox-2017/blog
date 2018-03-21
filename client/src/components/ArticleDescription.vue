<template>
    <div id="description">
        <p>{{description}}</p>
    </div>
</template>

<script>
import Axios from 'axios';

export default {
  props: ['id'],
  name: 'ArticleDescription',
  data() {
    return {
      description: '',
    };
  },
  methods: {
    getDescription(id) {
      Axios.get(`http://localhost:3000/articles/${id}`)
        .then((article) => {
          this.description = article.data.data.description;
        });
    },
  },
  created() {
    this.getDescription(this.id);
  },
};
</script>

<style>
    #description {
        width: 804px;
        float: right;
    }
</style>
