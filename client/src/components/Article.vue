<template>
  <div class="row">
    <div class="col-sm-3">
      <app-sidebar></app-sidebar>
    </div>
    <div class="col-xs-12 col-sm-9">
      <div class="col-sm-10 col-sm-offset-2">
        <div v-for="(article,index) in articles" :key="index">
          <div v-if="article._id === $route.params.id">
            <div class="row">
              <div class="col-xs-12 col-sm-12">
                <div class="well" style="background: #d3d3c1; margin: -14px 0 0 -10px; height: 60px">
                  <div style=" margin: -15px 0 0 0">
                    <div class="col-xs-12">
                      <span>Title: </span>
                      <span style="font-size: 20px; font-weight: bold;">{{ article.title }}</span>
                    </div>
                    <div class="col-xs-12" style="">
                      <span>Category:</span>
                      <span style="font-size: 1.2em; font-weight: bold;">{{ article.category }}</span>
                      <button class="btn btn-warning btn-sm pull-right" data-toggle="modal" :data-target="'#updateArticleModal'+article._id" style="margin-top: -5px;">
                        <i class="fa fa-pencil"></i>
                      </button>

                      <!-- Modal for Update article -->
                      <div class="modal fade" :id="'updateArticleModal'+article._id" role="dialog">
                        <div class="modal-dialog">

                          <!-- Modal content-->
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <h4 class="modal-title">Update This article</h4>
                            </div>
                            <div class="modal-body">
                              <form class="form-horizontal">
                                <div class="form-group">
                                  <div class="col-xs-3">
                                    <label class="control-label">Title : </label>
                                  </div>
                                  <div class="col-xs-9">
                                    <input class="form-control" type="text" v-model="article.title">
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="col-xs-3">
                                    <label class="control-label">Category :</label>
                                  </div>
                                  <div class="col-xs-9">
                                    <select class="form-control" id="sel1" v-model="article.category">
                                      <option v-for="category in categories" :key="category._id">{{ category.name }}</option>
                                    </select>
                                  </div>
                                </div>
                                <div class="form-group">
                                  <div class="col-xs-3">
                                    <label class="control-label">Description : </label>
                                  </div>
                                  <div class="col-xs-9">
                                    <input class="form-control" type="text" v-model="article.description">
                                  </div>
                                </div>
                              </form>
                            </div>
                            <div class="modal-footer">
                              <a class="btn btn-warning pul-right">
                                <span class="fa fa-pencil" data-dismiss="modal" @click.prevent="updateArticle(article._id, article)"> Update This Article</span>
                              </a>
                              <button type="button" class="btn btn-default" style="float: left" data-dismiss="modal">Close</button>
                            </div>
                          </div>

                        </div>
                      </div>
                      <!-- End of Modal for Update category -->

                      <button class="btn btn-danger btn-sm pull-right" data-toggle="modal" :data-target="'#deleteArticleModal'+article._id" style="margin-top: -5px;">
                        <i class="fa fa-trash"></i>
                      </button>

                      <!-- Modal for delete article -->
                      <div class="modal fade" :id="'deleteArticleModal'+article._id" role="dialog">
                        <div class="modal-dialog">

                          <!-- Modal content-->
                          <div class="modal-content">
                            <div class="modal-header">
                              <button type="button" class="close" data-dismiss="modal">&times;</button>
                              <h4 class="modal-title">delete This article</h4>
                            </div>
                            <div class="modal-body">
                              <h4>Are you sure want to delete this article ?</h4>
                            </div>
                            <div class="modal-footer">
                              <a class="btn btn-danger" style="float: right;">
                                <span class="fa fa-trash" data-dismiss="modal" @click.prevent="deleteArticle(article._id)"> delete This Article</span>
                              </a>
                              <button type="button" class="btn btn-default" style="float: left" data-dismiss="modal">Close</button>
                            </div>
                          </div>

                        </div>
                      </div>
                      <!-- End of Modal for delete article -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="well" style="height: 150px; margin-bottom: 30px">
              <div class="col-xs-12 col-sm-12" style="margin: -10px 0 0 -10px">
                <p>Description: </p>
                <h3 style="font-size: 1.5em; margin-top: -10px; font-weight: bold;">{{ article.description }}</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      category: []
    }
  },
  computed: {
    ...mapGetters(
      { categories: 'getCategories' }
      // { articles: 'getArticles'}
    ),
    articles () {
      return this.$store.getters.getArticles
    }
  },
  methods: {
    updateArticle (articleId, article) {
      console.log('articleId : ', articleId)
      console.log('article : ', article)
      let editData = {
        id: articleId,
        title: article.title,
        description: article.description,
        category: article.category,
        imageURL: article.imageURL
      }
      console.log('methods/ updateArticle/ editData : ', editData)
      this.$store.dispatch('updateArticle', editData)
    },
    deleteArticle (articleId) {
      console.log('methods/ deleteArticle/ articleId : ', articleId)
      this.$store.dispatch('deleteArticle', articleId)
    }
  }
}
</script>

<style scoped>
</style>
