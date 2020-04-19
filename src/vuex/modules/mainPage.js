import axios from 'axios'
const state = {
  orders: [],
  ordersCount: '',
  productsCount: '',
  usersCount: '',
  categoriesCount: ''
}
const getters = {
  GET_ORDERS_MAIN (state) {
    return this.orders
  },
  GET_ORDERS_COUNT (state) {
    return state.ordersCount
  },
  GET_PRODUCTS_COUNT (state) {
    return state.productsCount
  },
  GET_USERS_COUNT (state) {
    return state.usersCount
  },
  GET_CATEGORIES_COUNT (state) {
    return state.categoriesCount
  }
}
const mutations = {
  SET_ORDERS_LIST_MAIN (state, data) {
    state.orders = data
  },
  SET_ORDERS_COUNT: (state, data) => {
    state.ordersCount = data
  },
  SET_PRODUCTS_COUNT: (state, data) => {
    state.productsCount = data
  },
  SET_USERS_COUNT: (state, data) => {
    state.usersCount = data
  },
  SET_CATEGORIES_COUNT: (state, data) => {
    state.categoriesCount = data
  }
}
const actions = {
  ORDERS_COUNT_REQUEST ({commit}) {
    // eslint-disable-next-line no-undef
    return axios.get('api/orders')
      .then(({data}) => {
        commit('SET_ORDERS_COUNT', data.data.length)
      })
  },
  PRODUCTS_COUNT_REQUEST ({commit}) {
    // eslint-disable-next-line no-undef
    return axios.get('api/products')
      .then(({data}) => {
        commit('SET_PRODUCTS_COUNT', data.data.length)
      })
  },
  USERS_COUNT_REQUEST ({commit}) {
    // eslint-disable-next-line no-undef
    return axios.get('api/users')
      .then(({data}) => {
        commit('SET_USERS_COUNT', data.data.length)
      })
  },
  CATEGORIES_COUNT_REQUEST ({commit}) {
    // eslint-disable-next-line no-undef
    return axios.get('api/categories')
      .then(({data}) => {
        commit('SET_CATEGORIES_COUNT', data.data.length)
      })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
