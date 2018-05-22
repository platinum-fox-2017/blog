<template>
  <section id="one">
    <h2>Create New Article</h2>
    <div class="row">
      <div class="12u 12u$">
        <form method="post" action="#">
          <div class="row uniform 100%">
            <div class="12u 12u$(small)"><input type="text" v-model="form.title" placeholder="Title Article" /></div>
            <div class="12u"><textarea v-model="form.content" placeholder="Content Article" rows="4"></textarea></div>
          </div>
        </form>
        <ul class="actions">
          <li><input type="submit" @click="createArticle(form)" value="Submit Article" /></li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      form: {
        title: 'New Article',
        content: 'Accumsan orci faucibus id eu lorem semper. Eu ac iaculis ac nunc nisi lorem vulputate lorem neque cubilia ac in adipiscing in curae lobortis tortor primis integer massa adipiscing id nisi accumsan pellentesque commodo blandit enim arcu non at amet id arcu magna. Accumsan orci faucibus id eu lorem semper nunc nisi lorem vulputate lorem neque cubilia.'
      }
    }
  },
  methods: {
    readArticleById () {
      // this.$store.dispatch('readArticlesById', )
    },
    createArticle (form) {
      this.$store.dispatch('createArticle', form)
      this.$router.push('/')
    }
  }
}
</script>

<style>

</style>
