import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    categories: [],
    articles: []
  },
  getters: {
    getCategories (state) {
      console.log('getCategories / payload : ', state)
      return state.categories
    },
    getArticles (state) {
      console.log('getArticles / payload : ', state)
      return state.articles
    }
  },
  mutations: {
    // mutCategory
    createCategory (state, payload) {
      console.log('mutations/ createCategory/ payload : ', payload)
      state.categories.push(payload)
    },
    readCategories (state, payload) {
      console.log('mutations / payload : ', payload)
      console.log('mutations / payload.category : ', payload.category)
      state.categories = payload.category
    },
    updateCategory (state, payload) {
      let index = state.categories.findIndex(category => category._id === payload._id)
      console.log('mutations/ index : ', index)
      console.log('mutations / update/ payload : ', payload)
      console.log('mutations / update/ payload : ', payload.name)
      state.categories[index] = payload
    },
    deleteCategory (state, payload) {
      console.log('mutations/ delCategory / state.categories._id : ', state.categories)
      console.log('mutations/ delCategory/ payload : ', payload)
      let index = state.categories.findIndex(category => category._id === payload)
      console.log('mutations / delCategory/ index : ', index)
      console.log('mutations / delCategory/ state.categories/ before : ', state.categories)
      state.categories.slice(index, 1)
      console.log('mutations / delCategory/ state.categories/ after : ', state.categories)
    },
    // mutArticle
    createArticle (state, payload) {
      console.log('mutations/ createArticle/ payload : ', payload)
      state.articles.push(payload)
    },
    readArticles (state, payload) {
      console.log('mutations/ readArticles/ payload : ', payload)
      console.log('mutations/ readArticles/ payload.article : ', payload.article)
      state.articles = payload.article
    },
    updateArticle (state, payload) {
      let index = state.articles.findIndex(article => article._id === payload._id)
      console.log('mutations/ index : ', index)
      console.log('mutations/ updateArticle/ payload : ', payload)
      console.log('mutations/ updateArticle/ payload : ', payload.name)
      state.articles[index] = payload
    },
    deleteArticle (state, payload) {
      console.log('mutations/ deleteArticle / state.articles._id : ', state.articles)
      console.log('mutations/ deleteArticle/ payload : ', payload)
      let index = state.articles.findIndex(article => article._id === payload)
      console.log('mutations / deleteArticle/ index : ', index)
      console.log('mutations / deleteArticle/ state.articles/ before : ', state.articles)
      state.articles.slice(index, 1)
      console.log('mutations / deleteArticle/ state.articles/ after : ', state.articles)
    }
  },
  actions: {
    // actCategory
    createCategory ({commit}, payload) {
      let newCategory = {
        name: payload
      }
      console.log('actions/ createCategory/ payload : ', payload)
      axios.post('http://localhost:3000/api/category', newCategory)
        .then(({data}) => {
          // console.log('actions/ createCategory/ data : ', data)
          console.log('actions/ createCategory/ newCategory : ', newCategory)
          commit('createCategory', newCategory)
        })
        .catch(err => {
          console.log(err)
        })
    },
    readCategories ({commit}, payload) {
      axios.get('http://localhost:3000/api/category')
        .then(({data}) => {
          console.log('actions/ readCategories/ data.length : ', data.category.length)
          commit('readCategories', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateCategory ({commit}, payload) {
      let id = payload._id
      console.log('actions/ update/ id : ', id)
      axios.put(`http://localhost:3000/api/category/${id}`, payload)
        .then(({data}) => {
          console.log('actions/ update/ data : ', data)
          console.log('actions/ update/ data : ', data.category)
          commit('updateCategory', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteCategory ({commit}, payload) {
      let id = payload._id
      console.log('actions/ payload : ', payload)
      console.log('actions/ payload._id : ', payload._id)
      axios.delete(`http://localhost:3000/api/category/${id}`)
        .then(({data}) => {
          console.log('actions/ delete/ payload : ', payload)
          commit('deleteCategory', id)
        })
        .catch(err => {
          console.log(err)
        })
    },
    // actArticle
    createArticle ({commit}, payload) {
      let newArticle = {
        title: payload.title,
        description: payload.description,
        category: payload.category,
        imageURL: payload.imageURL
      }
      console.log('actions/ createArticle/ payload : ', payload)
      axios.post('http://localhost:3000/api/article', newArticle)
        .then(({data}) => {
          // console.log('actions/ createArticle/ data : ', data)
          console.log('actions/ createArticle/ newArticle : ', newArticle)
          commit('createArticle', newArticle)
        })
        .catch(err => {
          console.log(err)
        })
    },
    readArticles ({commit}, payload) {
      axios.get('http://localhost:3000/api/article')
        .then(({data}) => {
          console.log('actions/ readArticles/ data.length : ', data.article.length)
          commit('readArticles', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateArticle ({commit}, payload) {
      let id = payload._id
      console.log('actions/ update/ id : ', id)
      axios.put(`http://localhost:3000/api/article/${id}`, payload)
        .then(({data}) => {
          console.log('actions/ update/ data : ', data)
          console.log('actions/ update/ data : ', data.article)
          commit('updateArticle', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteArticle ({commit}, payload) {
      let id = payload._id
      console.log('actions/ payload : ', payload)
      console.log('actions/ payload._id : ', payload._id)
      axios.delete(`http://localhost:3000/api/article/${id}`)
        .then(({data}) => {
          console.log('actions/ delete/ payload : ', payload)
          commit('deleteArticle', id)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
