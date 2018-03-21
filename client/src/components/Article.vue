<template>
  <div class="col-md-9">
    <div v-for="(category,idx) in categories" :key="idx">
      <div v-for="(article,index) in category.articles" :key="index">
        <div v-if="article.id == $route.params.id">
          <div class="well">
            <div class="col-md-3">
              <span>{{ categories[idx].name }}</span>
            </div>
            <div class="col-md-9">
              <span>{{ article.title }}</span>
            </div>
          </div>
          <div class="jumbotron">
            <h3>{{ article.description }}</h3>
          </div>
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
