<template>
  <div id="app">
    <div class="container rounded">
      <nav-bar></nav-bar>
      <div class="row main">
        <div class="col-md-9 content">
          <router-view></router-view>
        </div>
        <div class="col-md-3 tracker border-left">
          <div v-for="(article, i) in articles" :key='i'>
            <router-link :to="{ name: 'FullArticle', params: { id: article._id }}" class="list">
              {{article.title}}
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <login-modal></login-modal>
    <register-modal></register-modal>
    <message-modal></message-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from '@/components/NavBar'
import LoginModal from '@/components/LoginModal'
import RegisterModal from '@/components/RegisterModal'
import MessageModal from '@/components/MessageModal'

export default {
  name: 'App',
  computed: {
    ...mapGetters({
      articles: 'getArticles',
      message: 'getMessage'
    })
  },
  components: {
    NavBar,
    LoginModal,
    RegisterModal,
    MessageModal
  },
  created () {
    this.$store.dispatch('generateArticles')
  },
  watch: {
    message () {
      // this.$jq('#messageModal').modal()
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #2c3e50;
}
.main {
  margin: 0;
  background-color: whitesmoke;
  box-shadow: 0px 0px 185px -43px rgba(0,0,0,1);
}
.container {
  padding: 0;
}
.content {
  min-height: 100vh;
}
.tracker {
  min-height: 100vh;
}
.list {
  color: #454343
}
.list:hover {
  text-decoration: none;
  color: #161515;
  text-shadow: 0px -2px 16px rgba(0, 0, 0, 0.38);
}
</style>
