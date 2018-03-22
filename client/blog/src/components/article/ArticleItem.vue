<template id="">
  <div class="tile is-9" id="ArticleItem">
    <div class="tile is-vertical is-6">
      <div class="tile">
        <div class="tile is-parent">
          <article class="tile is-child notification is-info">
            <p class="title">caption</p>
            <figure class="image is-4by3">
              <img src="https://bulma.io/images/placeholders/640x480.png">
            </figure>
          </article>
        </div>
      </div>
      <div class="tile is-parent">
        <article class="tile is-child notification is-danger">
          <p class="title">{{articleData.title}}</p>
          <p class="subtitle">{{articleData._id}}, {{articleData.createdAt}}</p>
          <div class="content">
            <button type="button" class="button" name="button">Edit</button>
            <button type="button" class="button" name="button">Delete</button>
          </div>
        </article>
      </div>
    </div>
    <div class="tile is-parent">
      <article class="tile is-child notification is-success">
        <div class="content">
          <p class="title">Content</p>
          <p class="subtitle">{{articleData.text}}</p>
          <div class="content">
            <!-- Content -->
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: 'ArticleItem',
  created: function () {
    // this.articleId = this.$route.params.articleId
    this.getOneArt()
  },
  data: () => {
    return {
      // articleId: '',
      articleData: ''
    }
  },
  props: ['articleId'],
  methods: {
    getOneArt: function () {
      this.baseAxios.get(`article/${this.articleId}`, {headers: {token: localStorage.getItem('jwtToken')}}).then(serverRes => {
        // console.log(serverRes.data.articles)
        this.articleData = serverRes.data.article
      })
    }
  },
  watch: {
    '$route.params.articleId': function () {
      this.getOneArt()
    }
  }

}
</script>

<style media="screen">

</style>
