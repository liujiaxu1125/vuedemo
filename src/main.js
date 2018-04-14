// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//在原型中加入$http方法，去完成axios的请求
import axios from 'axios'
Vue.prototype.$http = axios

Vue.config.productionTip = false

import './stylesheets/main.scss'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
