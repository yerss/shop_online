import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import filter from './modules/filter'
import order from './modules/order'
import user from './modules/user'
import products from './modules/product'
let axiosDefaults = require('axios/lib/defaults')
axiosDefaults.baseURL = 'http://localhost:8000/'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    products: [],
    categories: []
  },
  mutations: {},
  actions: {},
  getters: {},
  modules: {
    filter, order, user, products
  }
})

export default store
