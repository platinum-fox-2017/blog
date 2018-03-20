<template>
  <div id="app">
    <div class="container">
      <nav-bar></nav-bar>
      <router-view class="main" :articles="articles"></router-view>
    </div>
    <!-- <img src="./assets/logo.png"> -->
  </div>
</template>

<script>
import NavBar from '@/components/NavBar'
import axios from 'axios'

export default {
  name: 'App',
  data () {
    return {
      user: {
        first_name: '',
        last_name: '',
        email: ''
      },
      articles: []
    }
  },
  components: {
    NavBar
  },

  created () {
    // let apptoken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVhYjBjMDA4NzNkZGYwM2Y3NmQxNjhmZiIsImlhdCI6MTUyMTUzMjk4Nn0.Uz1xOIverKzeGizmt8b8EGBsDgSPF-PmuKG5MR1HIbg'
    let apptoken = localStorage.getItem('apptoken')
    axios.get('http://localhost:3000/articles/', {headers: {apptoken: apptoken}}).then(({data}) => {
      this.articles = data.articles
    })
    axios.get('http://localhost:3000/users/', {headers: {apptoken: apptoken}}).then(({data}) => {
      this.user.first_name = data.user.first_name
      this.user.last_name = data.user.last_name
      this.user.email = data.user.email
    })
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
}
.main {
  margin: 0;
  box-shadow: 0px 0px 185px -43px rgba(0,0,0,0.4)
}
.container {
  padding: 0;
}
</style>
