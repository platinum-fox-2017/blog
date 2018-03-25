<template>
  <div>
    <section id="navbar">
      <nav class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <router-link to="/">
              <a class="navbar-brand">B L O G</a>
            </router-link>
          </div>
          <div class="navbar-right" style="margin-top: 8px" v-if="token">
            <div class="btn-group" id="action">
              <button id="fb-btn" class="btn btn-warning" @click="logoutFunc()">Logout</button>
            </div>
          </div>
        </div>
      </nav>
    </section>

  </div>
</template>

<script>
export default {
  data () {
    return {
      token: ''
    }
  }
}
</script>

<style>
</style>
