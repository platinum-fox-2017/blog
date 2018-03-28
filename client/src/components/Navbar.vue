<template>
    <div id="navbar">
        <img src="@/assets/hr-col-a.png">
        <nav v-for="(article, i) in articles" :key="i">
          <a @click="toDescription(article._id)">{{ article.title }}</a>
<!-- <router-link :to="{ name: 'Description', params: { id: article._id } }"></router-link> -->
        </nav>
    </div>
</template>

<script>
export default {
  name: 'navbar',
  methods: {
    toDescription(id) {
      this.$router.push(`/${id}`);
    },
  },
  computed: {
    articles() {
      return this.$store.state.article;
    },
  },
};
</script>

<style>
    #navbar, #navbar>img {
        float: left;
        width: 221px;
    }

    #navbar>nav {
        text-align: center;
        margin-top: 16px;
    }

    #navbar>nav>a {
      cursor: pointer;
    }
</style>
