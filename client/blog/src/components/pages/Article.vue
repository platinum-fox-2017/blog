<template id="">

  <div id="Article">
    <section class="hero is-fullheight is-bold is-light">
      <div class="hero-body">
        <div class="container">
          <div class="columns ">
            <div class="column is-half">
              <div class="columns is-multiline">
                <div class="column"
                  id="article-list"
                  v-for="(news, index) in articleData"
                  :key="index">
                  <article class="notification is-black">
                    <div class="content">
                      <router-link :to="{ name: 'ArticleItem', params: {articleId: news._id} }">{{news.title}} Name</router-link>
                    </div>
                  </article>
                </div>
              </div>
            </div>
            <div class="column is-half">

            </div>


          </div>
        </div>
      </div>
    </section>
  </div>

</template>

<script type="text/javascript">
export default {
  name: 'Article',
  data: () => {
    return {
      articleData: '',
      address: 'http://localhost:3000',
      deploy: ''
    }
  },
  created: function () {
    this.getOwnArt()
  },
  methods: {
    getOwnArt: function () {
      this.baseAxios.get(`article/user/${localStorage.getItem('userID')}`, {headers: {token: localStorage.getItem('jwtToken')}}).then(serverRes => {
        // console.log(serverRes.data.articles)
        this.articleData = serverRes.data.articles
      })
    }
  }
}
</script>

<style media="screen">

</style>
