// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'

Vue.config.productionTip = false
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import ReadMore from 'vue-read-more';

(function (d, s, id) {
  var js
  var fjs = d.getElementsByTagName(s)[0]
  if (d.getElementById(id)) return
  js = d.createElement(s); js.id = id
  js.src = 'https://connect.facebook.net/en_US/sdk.js'
  fjs.parentNode.insertBefore(js, fjs)
}(document, 'script', 'facebook-jssdk'))

window.fbAsyncInit = function () {
  window.FB.init({
    appId: '1767231953328127',
    cookie: true,
    xfbml: true,
    version: 'v2.12'
  })
  Vue.FB = window.FB
}

Vue.use(ReadMore);
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
