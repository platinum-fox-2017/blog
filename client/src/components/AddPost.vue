<template>
  <div class="container">
    <navbar></navbar>
    <div class="row vertical-offset-100">
      <div class="col-md-4 offset-md-4 my-auto">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">Add Post</h3><br>
          </div>
          <div class="panel-body">
            <div class="form-group">
              Title:
              <input class="form-control" placeholder="Title" name="title" type="text" v-model="newPost.title">
            </div>
            <div class="form-group">
              Content:
              <textarea class="form-control" v-model="newPost.content"></textarea>
            </div>
            <input class="btn btn-lg btn-success btn-block" type="submit" value="Submit" @click="emitPost">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'AddPost',
  components: {
    Navbar
  },
  data () {
    return {
      newPost: {
        title: '',
        content: ''
      }
    }
  },
  methods: {
    emitPost: function () {
      this.$store.dispatch('emitPost', this.newPost)
      this.newPost.title = ''
      this.newPost.content = ''
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>

</style>
