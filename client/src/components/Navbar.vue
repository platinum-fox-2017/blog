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
          <div class="navbar-right" style="margin-top: 8px">
            <div class="btn-group" id="action">
              <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Action
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                  <router-link to="/add-category">
                    <a href="#">Add Category</a>
                  </router-link>
                </li>
                <li>
                  <router-link to="/add-article">
                    <a href="#">Add Article</a>
                  </router-link>
                </li>
              </ul>
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

}
</script>

<style>
</style>
