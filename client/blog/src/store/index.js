import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
const baseAxios = axios.create({
  baseURL: 'http://localhost:3000/'
})

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    title: 'blogApp',
    articleDatas: ''
  },
  mutations: {
    titleMut (state, data) {
      state.title = data
    },
    articleMut (state, data) {
      state.articleDatas = data
    }
  },
  actions: {
    getArticles ({commit}) {
      baseAxios.get(`article/user/${localStorage.getItem('userID')}`, {headers: {token: localStorage.getItem('jwtToken')}}).then(serverRes => {
        commit('articleMut', serverRes.data.articles)
      })
    }
  }
})

export default store
