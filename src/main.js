// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/router'
import BootstrapVue from 'bootstrap-vue'
import store from './vuex/store'
import {FontAwesomeIcon} from './icons'
import Swal from 'sweetalert2'
import moment from 'moment'
import vuetify from './vuetify'
Vue.filter('convert', function (data) {
  if (data == null) return null
  return moment(data).format('LLL')
})
Vue.filter('sumPrice', function (products) {
  let sum = 0
  for (let product of products) {
    sum += product.price
  }
  return sum
})

window.swal = Swal

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  onOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

window.toast = Toast
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.use(BootstrapVue)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  vuetify,
  store,
  components: {
    App
  },
  template: '<App/>'
})
