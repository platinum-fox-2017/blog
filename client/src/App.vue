<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="row">
      <div class="col-md-3">
        <app-sidebar></app-sidebar>
      </div>
      <div class="col-md-9">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
</style>
