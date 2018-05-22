<template>
  <section id="one">
    <h2>Login User</h2>
    <div class="row">
      <div class="12u 12u$">
        <form method="post" action="#">
          <div class="row uniform 100%">
            <div class="12u 12u$(small)"><input type="email" v-model="formLogin.username" placeholder="Insert You Email" /></div>
            <div class="12u 12u$(small)"><input type="password" v-model="formLogin.password" placeholder="Insert You Password" /></div>
          </div>
        </form>
        <ul class="actions">
          <li><input type="submit" @click="signinUser(formLogin)" value="Login" /></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      formLogin: {
        username: 'admin@admin.com',
        password: 'password'
      }
    }
  },
  methods: {
    signinUser (formLogin) {
      this.$store.dispatch('signinUser', formLogin)
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
