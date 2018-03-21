<template>
    <div id="navbar">
        <img src="@/assets/hr-col-a.png">
        <nav v-for="(article, i) in articles" :key="i">
          <a :href="article._id">{{ article.title }}</a>
<!-- <router-link :to="{ name: 'Description', params: { id: article._id } }"></router-link> -->
        </nav>
    </div>
</template>

<script>
export default {
  props: ['articles'],
  name: 'navbar',
};
</script>

<style>
    #navbar, #navbar>img {
        float: left;
        width: 221px;
    }

    #navbar>nav {
        text-align: center;
    }
</style>
