<template>
  <div class="container">
    <div class="col-md-6">
      <div id="logbox">
        <form id="signup">
          <h1>create an account</h1>
          <input type="email" placeholder="What's your email address?" autofocus="autofocus" required="required"
            class="input pass" v-model="user.email" />
          <input type="password" placeholder="Choose a password" required="required" class="input pass" v-model="user.password"/>
          <label>
            <input type="checkbox" value="" style="margin-left: 40px;" v-model="user.isAdmin"> Register as admin
          </label>
          <input type="submit" value="Sign me up!" class="inputButton" @click.prevent="signUp(user)" />
        </form>
      </div>
    </div>
    <!--col-md-6-->

    <div class="col-md-6">
      <div id="logbox">
        <form id="signin">
          <h1>account login</h1>
          <input type="email" placeholder="enter your email" class="input pass" />
          <input name="user[password]" type="password" placeholder="enter your password" required="required" class="input pass" />
          <input type="submit" value="Sign me in!" class="inputButton" />
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {},
      users: []
    }
  },
  beforeCreate () {
    this.$store.dispatch('getUsers')
  },
  methods: {
    signUp (user) {
      let newUser = {
        email: user.email,
        password: user.password,
        isAdmin: user.isAdmin || false
      }
      console.log('signUp/ newUser : ', newUser)
      // this.$store.dispatch('signUp', newUser)
    }
    // login (userData) {
    //   let loginUser = {
    //     email: userData.email,
    //     password: userData.password
    //   }
    //   let userExist = this.users.map(user => {
    //     user.email === loginUser.email && user.password === loginUser.password
    //   })
    //   console.log('userExist : ', userExist)
    // }
  }
}

</script>

<style>
  ::selection {
    background-color: #b5e2e7;
  }

  ::-moz-selection {
    background-color: #8ac7d8;
  }

  body {
    background: #3CC;
  }

  .container {
    display: -webkit-flex;
    display: flex;
    height: 100%;
  }

  #logbox {
    padding: 10px;
    margin: 50px auto;
    width: 340px;
    background-color: #fff;
    -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
    -moz-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
    box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  }

  h1 {
    text-align: center;
    font-size: 175%;
    color: #757575;
    font-weight: 300;
  }

  h1,
  input {
    font-family: "Open Sans", Helvetica, sans-serif;
  }

  .input {
    width: 75%;
    height: 50px;
    display: block;
    margin: 0 auto 15px;
    padding: 0 15px;
    border: none;
    border-bottom: 2px solid #ebebeb;
  }

  .input:focus {
    outline: none;
    border-bottom-color: #3CC !important;
  }

  .input:hover {
    border-bottom-color: #dcdcdc;
  }

  .input:invalid {
    box-shadow: none;
  }

  /* .pass:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px white inset;
  } */

  .inputButton {
    position: relative;
    width: 85%;
    height: 50px;
    display: block;
    margin: 30px auto 30px;
    color: white;
    background-color: #3CC;
    border: none;
    -webkit-box-shadow: 0 5px 0 #2CADAD;
    -moz-box-shadow: 0 5px 0 #2CADAD;
    box-shadow: 0 5px 0 #2CADAD;
  }

  .inputButton:hover {
    top: 2px;
    -webkit-box-shadow: 0 3px 0 #2CADAD;
    -moz-box-shadow: 0 3px 0 #2CADAD;
    box-shadow: 0 3px 0 #2CADAD;
  }

  .inputButton:active {
    top: 5px;
    box-shadow: none;
  }

  .inputButton:focus {
    outline: none;
  }

</style>
