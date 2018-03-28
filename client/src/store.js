import Vue from 'vue';
import Vuex from 'vuex';
import Axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    article: null,
  },
  getters: {
    findArticleById(state) {
      return function (id) {
        /* eslint no-underscore-dangle: 0 */
        return state.article.find(e => e._id === id);
      };
    },
    isLogin(state) {
      if (state.user) return true;
      return false;
    },
    username(state) {
      return state.user;
    },
  },
  mutations: {
    setUser(state, value) {
      state.user = value;
    },
    setArticle(state, value) {
      state.article = value;
    },
  },
  actions: {
    getArticle({ commit }) {
      Axios.get('http://localhost:3000/articles/')
        .then(({ data }) => {
          commit('setArticle', data.data);
        });
    // .catch((err) => {
    // console.error(err);
    // });
    },
    register({ commit }, value) {
      Axios.post('http://localhost:3000/register/', {
        name: value.name,
        email: value.email,
        password: value.password,
      })
        .then(({ data }) => {
          localStorage.token = data.token;
          commit('setUser', data.name);
        });
    // .catch((err) => {
    // console.error(err);
    // });
    },
    login({ commit }, value) {
      Axios.post('http://localhost:3000/signin/', {
        email: value.email,
        password: value.password,
      })
        .then(({ data }) => {
          localStorage.token = data.token;
          commit('setUser', data.name);
        });
    // .catch((err) => {
    // console.error(err);
    // });
    },
    verify({ commit }) {
      Axios.post('http://localhost:3000/verify/', {}, {
        headers: {
          token: localStorage.token,
        },
      })
        .then(({ data }) => {
          commit('setUser', data.name);
        });
    // .catch((err) => {
    // console.error(err);
    // });
    },
    add({ dispatch }, value) {
      Axios.post('http://localhost:3000/articles/', {
        title: value.title,
        description: value.description,
      }, {
        headers: {
          token: localStorage.token,
        },
      })
        .then(() => {
          dispatch('getArticle');
        });
    // .catch((err) => {
    // console.error(err);
    // });
    },
  },
});
