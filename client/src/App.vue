<template>
  <div id="app">
    <app-navbar></app-navbar>
    <div class="container">
      <div class="row">
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
