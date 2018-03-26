<template>
  <header id="header">
    <div class="inner">
      <a href="#" class="image"><img src="@/assets/images/logo.png" height="96" width="96" alt="" /></a>
      <h1>
        <strong v-if="user">Welcome {{user}}</strong>
        <br/> a personal blog build in from vuejs.
      </h1>
    </div>
    <nav id="nav">
      <ul>
        <li v-if="!user"><router-link to="/login"><a class="active">Login</a></router-link></li>
        <li><router-link to="/"><a class="">Read All Articles</a></router-link></li>
        <li v-if="user"><router-link to="/newarticle"><a class="active">Create New Article</a></router-link></li>
        <li v-if="user"><a @click="getLogout" class="active" style="cursor: pointer">Logout</a></li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  computed: {
    user () {
      return this.$store.getters.getUser
    }
  },
  methods: {
    getLogout () {
      this.$store.dispatch('logoutUser')
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
