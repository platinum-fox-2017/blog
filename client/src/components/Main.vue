<template>
    <div id="main" class="container">
        <navbar></navbar>
        <articles></articles>
        <router-view></router-view>
    </div>
</template>
<script>
import Navbar from '@/components/Navbar';
import Articles from '@/components/Articles';

export default {
  name: 'Main',
  components: {
    Navbar,
    Articles,
  },
};
</script>

<style>
    #main {
        margin-top: 16px;
        padding-top: 16px;
    }

    h1 {
        font-family: 'Permanent Marker', cursive;
    }

    #main>h1 {
        margin-left: 306px;
        font-size: 40px;
    }
</style>
