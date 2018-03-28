import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const $http = axios.create({
  baseURL: 'http://localhost:3000/api'
})

export default new Vuex.Store({
  state: {
    user: {
      id: localStorage.getItem('id'),
      name: localStorage.getItem('name'),
      email: localStorage.getItem('email'),
      username: localStorage.getItem('username')
    },
    articles: [],
    article: null
  },
  mutations: {
    getArticles: function (state, payload) {
      state.articles = payload.map(val => val)
      console.log('ini articles')
      console.log(state.articles)
    },
    clearUser: function (state) {
      state.user.id = ''
      state.user.name = ''
      state.user.email = ''
      state.user.username = ''
    },
    updateUser: function (state) {
      state.user.id = localStorage.getItem('id')
      state.user.name = localStorage.getItem('name')
      state.user.email = localStorage.getItem('email')
      state.user.username = localStorage.getItem('username')
    }
  },
  actions: {
    emitLogin: function (context, payload) {
      $http({
        method: 'post',
        url: '/users/signin',
        data: {
          username: payload.email,
          email: payload.email,
          password: payload.password
        }
      })
        .then(response => {
          console.log(`Response Login : ${JSON.stringify(response)}`)
          localStorage.setItem('token', response.data.data.token)
          localStorage.setItem('id', response.data.data.id)
          localStorage.setItem('name', response.data.data.name)
          localStorage.setItem('username', response.data.data.username)
          localStorage.setItem('email', response.data.data.email)
          context.commit('updateUser')
        })
    },
    emitSignup: function (context, payload) {
      $http({
        method: 'post',
        url: '/users/signup',
        data: {
          username: payload.username,
          email: payload.email,
          password: payload.password,
          name: payload.name
        }
      })
        .then(response => {
          console.log(`Response Signup : ${JSON.stringify(response)}`)
          localStorage.setItem('token', response.data.token)
          localStorage.setItem('id', response.data.id)
          localStorage.setItem('name', response.data.name)
          localStorage.setItem('username', response.data.username)
          localStorage.setItem('email', response.data.email)
          context.commit('updateUser')
        })
    },
    getArticles: function (context) {
      $http({
        method: 'get',
        url: '/articles'
      })
        .then(response => {
          console.log('success get data')
          console.log(response)
          context.commit('getArticles', response.data.data)
        })
    },
    emitPost: function (context, payload) {
      $http({
        method: 'post',
        url: '/articles',
        data: {
          title: payload.title,
          author: context.state.user.id,
          content: payload.content
        }
      })
        .then(response => {
          console.log('success add new post')
          context.dispatch('getArticles')
        })
    },
    // emitDeletePost: function (context, payload) {
    //   $http({
    //     method: 'delete',
    //     url: `/posts/${payload}`
    //   })
    //     .then(response => {
    //       console.log('post deleted')
    //       context.dispatch('getQuestions')
    //     })
    // },
    clearUser: function (context) {
      context.commit('clearUser')
    }
  }
})
