<template>
  <div class="container">
    <div class="row">
      <div class="col-md-3">
        <div class="panel panel-default">
          <div class="panel-heading librePanelHeading">
            <div class="panel-title">
              <a data-toggle="collapse" href="#menuPanelListGroup">
                <span>My Blog</span>
              </a>
            </div>
          </div>
          <ul class="list-group collapse in" id="menuPanelListGroup" v-for="(category,idx) in categories" :key="idx">
            <li class="list-group-item librePanelListGroupItem">
              <a data-toggle="collapse" :href="'#menuPanelSubListGroup'+idx">
                <span>{{ category.name }}</span>
                <b class="pull-right glyphicon glyphicon-chevron-right"></b>
              </a>

              <ul :id="'menuPanelSubListGroup'+idx" class="collapse librePanelSubListGroupItem">
                <li class="list-group-item librePanelListGroupItem" v-for="(article,index) in category.articles" :key="index">
                  <router-link :to="'/article/'+article.id">
                    <span>{{ article.title }}</span>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: [{
        name: 'category1',
        articles: [{
          id: '101',
          title: 'lorem ipsum101',
          description: 'lorem ipsum cat1 title101'
        },
        {
          id: '102',
          title: 'lorem ipsum102',
          description: 'lorem ipsum cat1 title102'
        },
        {
          id: '103',
          title: 'lorem ipsum103',
          description: 'lorem ipsum cat1 title103'
        }]
      },
      {
        name: 'category2',
        articles: [{
          id: '201',
          title: 'lorem ipsum201',
          description: 'lorem ipsum cat1 title201'
        },
        {
          id: '202',
          title: 'lorem ipsum202',
          description: 'lorem ipsum cat1 title202'
        },
        {
          id: '203',
          title: 'lorem ipsum203',
          description: 'lorem ipsum cat1 title203'
        }]
      }]
    }
  }
}
</script>

<style scoped>
</style>
