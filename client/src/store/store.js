import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

let url = ''
let LOCAL_DOMAINS = ['localhost', '127.0.0.1']
if (LOCAL_DOMAINS.includes(window.location.hostname)) {
  url = 'http://localhost:3004/api'
  // url = 'http://chandrabudiman.cf:3004/api'
} else {
  url = 'http://chandrabudiman.cf:3004/api'
}

export const store = new Vuex.Store({
  state: {
    users: [],
    categories: [],
    articles: []
  },
  getters: {
    getCategories (state) {
      console.log('getCategories / payload : ', state)
      return state.categories
    },
    getArticles (state) {
      console.log('getArticles / state : ', state)
      return state.articles
    },
    getUsers (state) {
      console.log('getters/ getUsers / payload : ', state)
      return state.users
    }
  },
  mutations: {
    // Users
    // signUp (state, payload) {
    //   console.log('mutations/ payload : ', payload)
    //   state.users.push(payload)
    // },
    login (state, payload) {
      localStorage.setItem('tokenJWT', payload.tokenJWT)
    },
    logout (state, payload) {
      localStorage.clear()
      state.token = null
      state.user = null
    },
    // getUsers (state, payload) {
    //   console.log('mutations/ payload : ', payload)
    //   state.users = payload
    // },
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
      console.log('mutations/ deleteCategory / state.categories._id : ', state.categories)
      console.log('mutations/ deleteCategory/ payload : ', payload)
      let index = state.categories.findIndex(category => category._id === payload)
      console.log('mutations / deleteCategory/ index : ', index)
      state.categories.slice(index, 1)
    },
    // mutArticle
    createArticle (state, payload) {
      console.log('mutations/ createArticle/ payload : ', payload)
      state.articles.unshift(payload)
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
      state.articles[index] = payload
    },
    deleteArticle (state, articleId) {
      console.log('mutations/ deleteArticle/ articleId : ', articleId)
      let index = state.articles.findIndex(article => article._id === articleId)
      console.log('mutations / deleteArticle/ index : ', index)
      state.articles.slice(index, 1)
    }
  },
  actions: {
    // actUsers
    signUp ({commit}, payload) {
      console.log(payload)
      axios.post(`${url}/user/signup`, {
        email: payload.email,
        password: payload.password,
        name: payload.name
      })
        .then(data => {
          console.log('act/ signUp/ data : ', data)
          commit('signUp', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    login ({commit}, payload) {
      axios.post(`${url}/user/login`, {
        email: payload.email,
        password: payload.password
      })
        .then(({data}) => {
          console.log('act/ login/ data : ', data)
          console.log('act/ signUp/ data.user : ', data.tokenJWT)
          commit('login', data)
          // window.location.href = '/'
        })
        .catch(err => {
          console.log('login error', err)
        })
    },
    logout ({commit}, payload) {
      commit('logout')
    },
    getUsers ({commit}, payload) {
      axios.get(`${url}/user`, payload)
        .then(({data}) => {
          console.log('Actions/ signup/ payload : ', payload)
          commit('getUsers', payload)
        })
        .catch(err => {
          console.log(err)
        })
    },

    // actCategory
    createCategory ({commit}, payload) {
      let newCategory = {
        name: payload
      }
      console.log('actions/ createCategory/ payload : ', payload)
      axios.post(`${url}/category`, newCategory)
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
      axios.get(`${url}/category`)
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
      axios.put(`${url}/category/${id}`, payload)
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
      axios.delete(`${url}/category/${id}`)
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
      axios.post(`${url}/article`, newArticle)
        .then(({data}) => {
          // console.log('actions/ createArticle/ data : ', data)
          console.log('actions/ createArticle/ newArticle : ', newArticle)
          console.log('actions/ createArticle/ payload : ', payload)
          commit('createArticle', newArticle)
        })
        .catch(err => {
          console.log(err)
        })
    },
    readArticles ({commit}, payload) {
      axios.get(`${url}/article`)
        .then(({data}) => {
          console.log('actions/ readArticles/ data.length : ', data.article.length)
          commit('readArticles', data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    updateArticle ({commit}, payload) {
      let id = payload.id
      console.log('actions/ updateArticle/ payload : ', payload)
      console.log('actions/ updateArticle/ id : ', id)
      axios.put(`${url}/article/${id}`, payload)
        .then(({data}) => {
          console.log('actions/ update/ data : ', data)
          console.log('actions/ update/ payload : ', payload)
          commit('updateArticle', payload)
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteArticle ({commit}, articleId) {
      console.log('actions/ articleId : ', articleId)
      axios.delete(`${url}/article/${articleId}`)
        .then(({data}) => {
          console.log('Actions/ deleteArticle/ articleId : ', articleId)
          commit('deleteArticle', articleId)
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
})
