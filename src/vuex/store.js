import Vue from 'vue'
import Vuex from 'vuex'
import vuexActions from './actions/actions'
import apiRequests from './actions/api-requests'
import mutations from './mutations/mutations'
import getters from './getters/getters'
import axios from 'axios'

let axiosDefaults = require('axios/lib/defaults')
axiosDefaults.baseURL = 'http://localhost:8000'
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem('access_token')}`
const actions = {...vuexActions, ...apiRequests}

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    users: [],
    orders: [],
    order_detail: [],
    products: [],
    categories: [],
    filters: [],
    role: ''
  },
  mutations,
  actions,
  getters
})

export default store
