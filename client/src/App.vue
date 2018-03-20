<template>
  <div id="app">
    <Nav></Nav>
    <router-view/> <!-- bagian yang akan berubah-ubah -->
  </div>
</template>

<script>
import Nav from '@/components/Header';

export default {
  name: 'App',
  components: {
    Nav,
  },
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
html, body {
  margin: 0;
  top: 0;
  background:#0e141e;
  height:100%;
  font:13px 'Open Sans', Arial, sans-serif;
  line-height:20px;
  font-weight:300;
  letter-spacing:0.4px;
}
</style>
