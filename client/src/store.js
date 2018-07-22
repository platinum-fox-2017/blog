import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    articles: [],
    user: null,
    message: ``
  },
  getters: {
    getArticles: (state) => {
      return state.articles
    },
    getUser: (state) => {
      return state.user
    },
    getMessage: (state) => {
      return state.message
    }
  },
  mutations: {
    setArticles (state, payload) {
      state.articles = payload
    },
    setUser (state, payload) {
      state.user = payload
    },
    setMessage (state, payload) {
      state.message = payload
    },
    newArticle (state, payload) {
      state.articles.push(payload)
    }
  },
  actions: {
    generateArticles (context) {
      axios
        .get('http://localhost:3000/articles/')
        .then(({data}) => {
          context.commit('setArticles', data.articles)
        })
    },
    login (context, payload) {
      axios
        .post('http://localhost:3000/login/', {
          email: payload.email,
          password: payload.password
        })
        .then(({data}) => {
          localStorage.setItem('apptoken', data.apptoken)
          context.commit('setUser', data.user)
          context.commit('setMessage', data.message)
        })
    },
    register (context, payload) {
      axios
        .post('http://localhost:3000/users/', payload)
        .then(({data}) => {
          context.dispatch('login', payload)
        })
    },
    post (context, payload) {
      let apptoken = localStorage.getItem('apptoken')
      axios
        .post('http://localhost:3000/articles/', payload, {headers: {apptoken: apptoken}})
        .then(({data}) => {
          context.dispatch('generateArticles')
        })
    }
  }
})

export default store
