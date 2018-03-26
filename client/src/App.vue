<template>
  <div id="app">
    <Header/>
    <div id="main">
      <router-view/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
export default {
  name: 'App',
  components: {
    Header, Footer
  }
}
</script>

<style>
</style>
