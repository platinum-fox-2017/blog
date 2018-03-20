<template>
<div>
<navbar></navbar>
<header-nav></header-nav>
<!-- <sidebar></sidebar> -->
<router-view></router-view>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'
import HeaderNav from '@/components/HeaderNav'

export default {
  name: 'Home',
  components: {
    Navbar,
    HeaderNav,
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>

</style>
