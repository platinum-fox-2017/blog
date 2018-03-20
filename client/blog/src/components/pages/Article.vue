<template id="">
  <div id="Article">
    <section class="hero is-fullheight is-bold is-light">
      <div class="hero-body">
        <div class="container">
          <div class="tile is-ancestor">
            <div class="tile is-3 is-parent">
              <article class="tile is-child notification is-black">
                <div class="menu">
                  <p class="menu-label">Articles</p>
                  <ul class="menu-list">
                    <li
                    id="article-list"
                    v-for="(news, index) in articleData"
                    :key="index">
                    <router-link :to="{ name: 'ArticleItem', params: {articleId: news._id} }">{{news.title}} Name</router-link></li>
                  </ul>
                </div>
              </article>
            </div>
            <router-view></router-view>
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
