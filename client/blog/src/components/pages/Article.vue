<template id="">
  <div id="Article">
    <section class="hero is-fullheight is-bold is-light">
      <div class="hero-head">
        <div class="p-custom">
          <div class="tile is-ancestor">
            <div class="tile is-vertical is-3">
              <div class="tile is-parent" id="blog-list">
                <article class="tile is-child notification is-dark full-height">
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
              <div class="tile is-parent">
                <article id="post-button" class="tile is-child  notification is-dark">
                  <div>
                    <a v-on:click="activateModal" class="is-primary is-large button">POST</a>
                  </div>
                </article>
              </div>
            </div>

            <router-view></router-view>
          </div>
        </div>
      </div>
    </section>

    <div :class="modalClass">
      <div class="modal-background" v-on:click="deactivateModal"></div>
      <div class="modal-card">
        <header class="modal-card-head">
          <p class="modal-card-title">New Blogpost</p>
          <button class="delete" aria-label="close" v-on:click="deactivateModal"></button>
        </header>
        <section class="modal-card-body">
          <!-- Content ... -->
          <p>AAAAAAAAAAAAAAAAAAAAAA</p>
          <!-- <router-view class="view two" name="modalPost"></router-view> -->
          <post></post>
        </section>
        <footer class="modal-card-foot">
          <button class="button is-success">Save changes</button>
          <button class="button" v-on:click="deactivateModal">Cancel</button>
        </footer>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
import Post from '@/components/pages/Post'
export default {
  name: 'Article',
  components: {
    'post': Post
  },
  data: () => {
    return {
      // articleData: '',
      address: 'http://localhost:3000',
      deploy: '',
      modalClass: 'modal'
    }
  },
  created: function () {
    // this.getOwnArt()
    this.$store.dispatch('getArticles')
  },
  computed: {
    articleData () {
      return this.$store.state.articleDatas
    }
  },
  methods: {
    getOwnArt: function () {
      // this.baseAxios.get(`article/user/${localStorage.getItem('userID')}`, {headers: {token: localStorage.getItem('jwtToken')}}).then(serverRes => {
      //   // console.log(serverRes.data.articles)
      //   this.articleData = serverRes.data.articles
      // })
    },
    activateModal () {
      this.modalClass = 'modal is-active'
    },
    deactivateModal () {
      this.modalClass = 'modal'
    }
  }
}
</script>

<style media="screen">
.p-custom {
  padding: 3.6em 3.7em;
}
.full-height {
  min-height: 80vh;
}
#post-button {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
