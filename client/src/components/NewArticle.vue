<template>
  <div>
    <div class="col-md-12 area">
      <input type="text" placeholder="Title" id="title" v-model="title">
      <textarea class="form-control" rows="5" id="description" placeholder="description" v-model="description"></textarea>
      <button class="btn btn-success" type="submit" @click="post()">Post</button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      title: ``,
      description: ``
    }
  },
  methods: {
    post () {
      this.$store.dispatch('post', {
        title: this.title,
        description: this.description
      })
      this.$router.push({name: 'Home'})
    }
  }
}
</script>

<style scoped>
.area {
  margin-top: 50px;
}
#title {
 width: 100%;
 height: 50px;
 font-size: 30px;
 font-weight: bold;
}
#description {
  min-height: 70vh;
}
.btn-success {
  width: 100%;
}
</style>
