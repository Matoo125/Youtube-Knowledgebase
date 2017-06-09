// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex'
import Toaster from 'v-toaster' // https://github.com/paliari/v-toaster
import 'v-toaster/dist/v-toaster.css'

Vue.config.productionTip = false

Vue.use(Toaster, {timeout: 5000})

const eventHub = new Vue()
Vue.prototype.$bus = eventHub

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
