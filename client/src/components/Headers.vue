<template>
    <header id="header">
        <div class="container">
            <div class="logo">
                <a @click="toHome">Blog</a>
            </div>
            <div class="menu">
              <a data-toggle="modal" data-target="#addModal" v-if="isLogin">add article</a>
              <add-article></add-article>
            </div>
            <div class="info">
              <a v-if="isLogin">{{ username }}</a>
              <a href="#" @click="logout()" v-if="isLogin">logout</a>
              <a href="#"
                data-toggle="modal"
                data-target="#registerModal" v-if="!isLogin">
                  register
              </a>
              <a href="#" data-toggle="modal" data-target="#loginModal" v-if="!isLogin">login</a>
              <register></register>
              <login></login>
            </div>
        </div>
    </header>
</template>

<script>
import Login from '@/components/Login';
import Register from '@/components/Register';
import AddArticle from '@/components/AddArticle';

export default {
  name: 'Headers',
  components: {
    Login,
    Register,
    AddArticle,
  },
  methods: {
    toHome() {
      this.$router.push('/');
    },
    logout() {
      this.$store.commit('setUser', null);
      delete localStorage.token;
    },
  },
  computed: {
    isLogin() {
      return this.$store.getters.isLogin;
    },
    username() {
      return this.$store.getters.username;
    },
  },
};
</script>

<style>
    #header {
        /* position: fixed; */
        min-width: 1110px;
        top: 0;
        left: 0;
        right: 0;
        padding: 11px 0;
        box-shadow: 1px 0 3px rgba(0, 0, 0, 0.2);
        background: white;
    }

    .logo, .menu {
        float: left;
    }

    .logo a {
        display: block;
    }

    a, a:hover, a:focus {
        text-decoration: none;
        outline: none;
        color: #1d1d1d;
    }

    #header .info {
        float: right;
        color: #8c8c8c;
    }

    .logo, .menu, #header .info {
        line-height: 16px;
        letter-spacing: 1px;
        margin: 11px 0;
    }

    .menu {
        margin-left: 16px;
    }

    .container a {
      cursor: pointer;
    }
</style>
