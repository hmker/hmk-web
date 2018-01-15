// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import normalize from 'normalize.css'
import App from './App'
import './main.css'
import router from './router'
import axios from 'axios'
import Notifications from 'vue-notification'
import VueTimeago from 'vue-timeago'

Vue.config.productionTip = false
Vue.http = Vue.prototype.$http = axios
Vue.use(Notifications)
Vue.use(VueTimeago, {
  name: 'timeago', // component name, `timeago` by default
  locale: 'en-US',
  locales: {
    // you will need json-loader in webpack 1
    'en-US': require('vue-timeago/locales/en-US.json')
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
