import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

var url = ''
var LOCAL_DOMAINS = ['localhost', '127.0.0.1']
if (LOCAL_DOMAINS.includes(window.location.hostname)) {
  url = 'http://localhost:3003/api'
} else {
  url = 'http://seorangeksa.com:3003/api'
}

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    token: localStorage.getItem('token'),
    user: localStorage.getItem('user'),
    articleId: null,
    articles: []
  },
  getters: {
    getUser (state) {
      console.log('getters user: ', state)
      return state.user
    },
    getArticles (state) {
      console.log('getters articles: ', state)
      return state.articles
    }
  },
  mutations: {
    setUser (state, payload) {
      console.log('mutations setUser : ', payload)
      state.user = payload.user
    },
    signinUser (state, payload) {
      console.log('mutations user: ', payload.user)
      localStorage.setItem('token', payload.token)
      localStorage.setItem('user', payload.user.username)
      state.token = payload.token
      state.user = payload.user.username
    },
    logoutUser (state, payload) {
      localStorage.clear()
      state.token = null
      state.user = null
    },
    readArticles (state, payload) {
      console.log('mutations articles: ', payload)
      state.articles = payload
    },
    createArticle (state, payload) {
      console.log('mutations createArticle: ', payload)
      state.articles.push(payload)
    },
    updateArticle (state, payload) {
      console.log('mutations updateArticle: ', payload)
      let index = state.articles.findIndex(article => article._id === payload)
      state.articles[index] = payload
    },
    deleteArticle (state, payload) {
      console.log('mutations deleteArticle: ', payload)
      let index = state.articles.findIndex(article => article._id === payload)
      state.articles.splice(index, 1)
    }
  },
  actions: {
    signinUser ({commit}, payload) {
      console.log('action payload : ', payload)
      axios.post(`${url}/users/signin`, {
        username: payload.username,
        password: payload.password
      }).then(({data}) => {
        console.log('actions signinUser data : ', data)
        commit('signinUser', data)
      }).catch(err => {
        console.log('actions error signinUser', err)
      })
    },
    logoutUser ({commit}, payload) {
      commit('logoutUser')
    },
    readArticles ({commit}, payload) {
      axios.get(`${url}/articles`).then(({data}) => {
        // console.log('actions readArticles : ', data.articles)
        commit('readArticles', data.articles)
      }).catch(err => {
        console.log('actions error readArticles : ', err)
      })
    },
    readArticlesById ({commit}, payload) {
      axios.get(`${url}/articles/:id`).then(({data}) => {
        console.log('actions readArticlesById : ', data.articles)
        // commit('readArticles', data.articles)
      }).catch(err => {
        console.log('actions error readArticlesById : ', err)
      })
    },
    createArticle ({commit}, payload) {
      axios.post(`${url}/articles`, {
        title: payload.title,
        content: payload.content
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      }).then((resp) => {
        console.log('actions createArticle : ', resp.data.article)
        commit('createArticle', resp.data.article)
      }).catch(err => {
        console.log('actions error createArticle : ', err)
      })
    },
    updateArticle ({commit}, payload) {
      axios.put(`${url}/articles/${payload}`, {
        title: payload.title,
        content: payload.content
      }, {
        headers: {
          token: localStorage.getItem('token')
        }
      }).then((resp) => {
        console.log('actions updateArticle : ', resp)
        commit('updateArticle', payload)
      }).catch(err => {
        console.log('actions error updateArticle : ', err)
      })
    },
    deleteArticle ({commit}, payload) {
      axios.delete(`${url}/articles/${payload}`, {
        headers: {
          token: localStorage.getItem('token')
        }
      }).then((resp) => {
        console.log('actions deleteArticle : ', resp)
        commit('deleteArticle', payload)
      }).catch(err => {
        console.log('actions error deleteArticle : ', err)
      })
    }
  }
})
