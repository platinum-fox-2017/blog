<template>
  <section id="one">
    <div v-for="(article, id) in articles" :key="id">
      <header class="major"><h2>{{article.title}}</h2></header>
      <span><small>{{article.author.username}} - {{article.createdAt}}</small></span>
      <p>{{article.content}}</p>
      <ul class="actions" v-if="user === article.author.username">
        <li><button @click.prevent="updateArticle(article._id)" class="button">Edit Article</button></li>
        <li><button @click.prevent="deleteArticle(article._id)" class="button">Delete Article</button></li>
      </ul>
    </div>
  </section>
</template>

<script>
import swal from 'sweetalert2'
export default {
  beforeCreate () {
    this.$store.dispatch('readArticles')
  },
  computed: {
    user () {
      return this.$store.getters.getUser
    },
    articles () {
      return this.$store.getters.getArticles
    }
  },
  methods: {
    updateArticle (articleId) {
      // this.$store.dispatch('updateArticle', articleId)
      this.$router.push('/article/' + articleId)
      this.$store.state.articleId = articleId
    },
    deleteArticle (articleId) {
      swal({
        title: 'Are you sure?',
        text: 'Believe it, what you do you will get !!',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, delete it!',
        cancelButtonText: 'No, keep it'
      }).then((result) => {
        if (result.value) {
          this.$store.dispatch('deleteArticle', articleId)
        }
      })
    }
  }
}
</script>

<style>

</style>
