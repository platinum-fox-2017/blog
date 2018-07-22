<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <router-link :to="{ name: 'Home'}" class="nav-text">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </router-link>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">About me</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Contacts</a>
                </li>
                <li class="nav-item" @click="newArticle()" v-if="role === 'author'">
                    <a class="nav-link" href="#">New Post</a>
                </li>
            </ul>
            <ul class="navbar-nav ml-auto">
                <li class="nav-item" v-if="user">
                    <a class="nav-link" href="#">Hi, {{user.first_name}}</a>
                </li>
                <li class="nav-item" v-if="user" @click="logout">
                    <a class="nav-link" href="#">Logout</a>
                </li>
                <li class="nav-item" data-toggle="modal" data-target="#loginModal" v-else>
                    <a class="nav-link" href="#">Login</a>
                </li>
            </ul>
            <!-- <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> -->
        </div>
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      role: null
    }
  },
  computed: {
    ...mapGetters({
      user: 'getUser'
    })
  },
  methods: {
    logout () {
      localStorage.removeItem('apptoken')
      this.$store.commit('setUser', null)
    },
    newArticle () {
      this.$router.push({name: 'NewArticle'})
    }
  },
  watch: {
    user () {
      if (this.user) {
        this.role = this.user.role
      } else {
        this.role = null
      }
    }
  }
}
</script>

<style scoped>
.navbar {
    padding: 0;
}
.nav-text {
    text-decoration: none;
}
</style>
