<template>
  <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #404745;">
    <a class="navbar-brand" href="#" style="color:white;">My Blog</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <ul class="nav navbar-top-links navbar-right" style="float: right;">
          <li v-if="!tokenfb"><button class="btn btn-primary justify-content-end" :id="btnLogin" @click="getStatusFB()" type="button"><i class="fa fa-facebook-official"></i> {{btnLogin}}</button></li>
          <li v-if="tokenfb"><button class="btn btn-outline-danger"  @click="logout()" type="button"> Logout <i class="fa fa-sign-out"></i></button></li>
        </ul>
      </form>
    </div>
  </nav>
</template>

<script>
import axios from 'axios'
export default {
  name: 'navbar',
  data () {
    return {
      tokenfb: localStorage.getItem('tokenfb') || null,
      btnLogin: 'Login With Facebook'
    }
  },
  methods: {
    getStatusFB () {
      this.loginFB(e => {
        console.log(e)
        this.getProfileFB()
      })
    },

    loginFB (callback) {
      window.FB.login(function (response) {
        if (response.authResponse) {
          localStorage.setItem('tokenfb', response.authResponse.accessToken)
          callback(response)
        } else {
          console.log('Unknow connected facebook')
        }
      }, { scope: 'email,public_profile' })
    },

    getProfileFB () {
      axios.get('http://localhost:3000/',{
        headers:{token:localStorage.getItem('tokenfb')}
      }).then(response => {
        localStorage.setItem('foto', response.data.foto)
        localStorage.setItem('name', response.data.name)
        this.tokenfb=localStorage.getItem('tokenfb')
        window.location.reload()
      }).catch(err => console.error(err))
    },

    logout () {
      this.tokenfb=null
      window.FB.getLoginStatus(function (response) {
        if (response.status === 'connected') {
          window.FB.logout(function (response) {
            localStorage.clear()
            window.location.reload()
          })
        }
      })
    }
  }
}
</script>

<style scoped>

</style>
