<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-6 col-md-4">
        <div class="panel panel-default">
          <div class="panel-heading librePanelHeading">
            <div class="panel-title">
              <span>My Blog</span>
              <div class="btn-group" id="action" style="float: right; margin-top: -3px">
              <button type="button" class="btn btn-success dropdown-toggle btn-sm" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >Action
                <span class="caret"></span>
              </button>
              <ul class="dropdown-menu">
                <li>
                <a href="#" data-toggle="modal" data-target="#categoryModal">Create Category</a>
                </li>
                <li>
                <a href="#" data-toggle="modal" data-target="#articleModal">Create Article</a>
                </li>
              </ul>
              </div>
            </div>

            <!-- Category Modal -->
            <div class="modal fade" id="categoryModal" role="dialog">
              <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title text-center">Create Category</h4>
                  </div>
                  <div class="modal-body">
                    <form class="form-horizontal" action="/action_page.php">
                      <div class="form-group">
                        <label class="control-label col-sm-2">Name :</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" placeholder="Enter Category Name" v-model="category">
                        </div>
                      </div>
                      <!-- <div class="form-group">
                        <div class="col-sm-offset-2 col-sm-10">
                        </div>
                      </div> -->
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="submit" class="btn btn-success" @click="createCategory(category)" data-dismiss="modal">Submit</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- End of Category Modal -->

            <!-- Article Modal -->
            <div class="modal fade" id="articleModal" role="dialog">
              <div class="modal-dialog">
                <!-- Modal content-->
                <div class="modal-content">
                  <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title text-center">Add Article</h4>
                  </div>
                  <div class="modal-body">
                    <form class="form-horizontal" action="/action_page.php">
                      <div class="form-group">
                        <label class="control-label col-sm-2">Title :</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" placeholder="Enter Article Title" v-model="article.title">
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-sm-2">Description :</label>
                        <div class="col-sm-10">
                          <textarea type="text" class="form-control" placeholder="Enter Article Description" v-model="article.description"></textarea>
                        </div>
                      </div>
                      <div class="form-group">
                        <div class="col-xs-8">
                        <label for="" class="control-label col-xs-2">Category</label>
                          <select class="form-control" id="sel1" v-model="article.category">
                            <option v-for="category in categories" :key="category._id">{{ category.name }}</option>
                          </select>
                        </div>
                      </div>
                      <div class="form-group">
                        <label class="control-label col-sm-2">Image URL :</label>
                        <div class="col-sm-10">
                          <input type="text" class="form-control" placeholder="Enter image URL"  v-model="article.imageURL">
                        </div>
                      </div>
                      <div class="col-sm-4 col-sm-offset-4">
                        <img :src="article.imageURL" align="middle" height="150px">
                      </div>
                    </form>
                  </div>
                  <div class="modal-footer">
                    <button type="submit" class="btn btn-success" @click="createArticle(article)" data-dismiss="modal">Submit</button>
                  </div>
                </div>
              </div>
            </div>
            <!-- End of article Modal -->

          </div>
          <ul class="list-group collapse in" id="menuPanelListGroup" v-for="(category,idx) in categories" :key="idx">
            <li class="list-group-item librePanelListGroupItem">
              <a data-toggle="collapse" :href="'#menuPanelSubListGroup'+idx">
                <span>{{ category.name }}</span>
                <b class="pull-right glyphicon glyphicon-chevron-right"></b>
              </a>

              <button class="btn btn-warning btn-sm" data-toggle="modal" :data-target="'#updateCategoryModal'+category._id" style="float: right; margin-right: 20px; margin-top: -5px;">
              <i class="fa fa-pencil"></i>
              </button>

              <!-- Modal for Update category -->
              <div class="modal fade" :id="'updateCategoryModal'+category._id" role="dialog">
                <div class="modal-dialog">

                  <!-- Modal content-->
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4 class="modal-title">Update This Category</h4>
                    </div>
                    <div class="modal-body">
                      <form class="form-horizontal">
                        <div class="form-group">
                          <label for="disabledInput" class="col-sm-3 control-label">Name : </label>
                          <div class="col-sm-9">
                            <input class="form-control" id="disabledInput" type="text" v-model="category.name">
                          </div>
                        </div>
                      </form>

                    </div>
                    <div class="modal-footer">
                      <a class="btn btn-warning" style="float: right">
                        <span class="fa fa-pencil" data-dismiss="modal" @click.prevent="updateCategory(category)"> Update This Category</span>
                      </a>
                      <button type="button" class="btn btn-default" style="float: left" data-dismiss="modal">Close</button>
                    </div>
                  </div>

                </div>
              </div>
              <!-- End of Modal for Update category -->

              <button class="btn btn-danger btn-sm" data-toggle="modal" :data-target="'#deleteCategoryModal'+category._id" style="float: right; margin-right: 20px; margin-top: -5px;">
                <i class="fa fa-trash"></i>
              </button>

              <!-- Modal for delete category -->
              <div class="modal fade" :id="'deleteCategoryModal'+category._id" role="dialog">
                <div class="modal-dialog">

                  <!-- Modal content-->
                  <div class="modal-content">
                    <div class="modal-header">
                      <button type="button" class="close" data-dismiss="modal">&times;</button>
                      <h4 class="modal-title">delete This Category</h4>
                    </div>
                    <div class="modal-body">
                      <h4>Are you sure want to delete this category ?</h4>
                    </div>
                    <div class="modal-footer">
                      <a class="btn btn-danger" style="float: right">
                        <span class="fa fa-trash" data-dismiss="modal" @click.prevent="deleteCategory(category)"> delete This Category</span>
                      </a>
                      <button type="button" class="btn btn-default" style="float: left" data-dismiss="modal">Close</button>
                    </div>
                  </div>

                </div>
              </div>
              <!-- End of Modal for delete category -->

              <ul :id="'menuPanelSubListGroup'+idx" class="collapse librePanelSubListGroupItem">
                <li class="list-group-item librePanelListGroupItem" v-for="(article,index) in articles" :key="index">
                  <router-link :to="'/article/'+article._id">
                    <span v-show="article.category === category.name">
                      {{ article.title }}
                    </span>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <!-- <h1>{{categories}}</h1> -->
        <!-- <h1>{{articles}}</h1> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      category: [],
      article: []
    }
  },
  computed: {
    categories () {
      console.log('this.$store.state.getCategories : ', this.$store.getters.getCategories)
      console.log('this.$store.getters.getCategories.length : ', this.$store.getters.getCategories.length)
      return this.$store.getters.getCategories
    },
    articles () {
      console.log('this.$store.state.getArticles : ', this.$store.state.getArticles)
      console.log('this.$store.getters.getArticles.length : ', this.$store.getters.getArticles.length)
      return this.$store.getters.getArticles
    }
  },
  beforeCreate: function () {
    this.$store.dispatch('readCategories')
    this.$store.dispatch('readArticles')
  },

  methods: {
    // methCategory
    createCategory (category) {
      console.log('methods / createCategory/ category : ', category)
      this.$store.dispatch('createCategory', category)
    },
    updateCategory (category) {
      console.log('methods / updateCategory : ', category.name)
      this.$store.dispatch('updateCategory', category)
    },
    deleteCategory (category) {
      console.log('sidebar / deleteCategory()/ category : ', category)
      console.log('sidebar / deleteCategory()/ category._id : ', category._id)
      this.$store.dispatch('deleteCategory', category)
    },
    // methArticle
    createArticle (article) {
      console.log('methods / createArticle/ article : ', article)
      this.$store.dispatch('createArticle', article)
    },
    updateArticle (article) {
      console.log('methods / updateArticle : ', article.name)
      this.$store.dispatch('updateArticle', article)
    },
    deleteArticle (article) {
      console.log('sidebar / deleteArticle()/ article : ', article)
      console.log('sidebar / deleteArticle()/ article._id : ', article._id)
      this.$store.dispatch('deleteArticle', article)
    }
  }
}
</script>

<style scoped>
</style>
