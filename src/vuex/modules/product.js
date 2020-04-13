import axios from 'axios'
import router from '../../router/router'

const state = {
  products: [],
  product_detail: {}
}

const getters = {
  PRODUCTS (state) {
    return state.products
  },
  PRODUCT_DETAIL(state){
    return state.product_detail
  }
}

const mutations = {
  SET_PRODUCTS: (state, data) => {
    state.products = data.data
  },
  SET_PRODUCT_DETAIL: (state, data) => {
    state.product_detail = data
  },
  DELETE_PRODUCT: (state, id) => {
    let index = state.products.findIndex(x => x.id === id)
    state.orders.splice(index, 1)
  },
}

const actions = {
  GET_PRODUCTS ({commit}, data) {
    return axios.get(`api/products`)
      .then((response) => {
        commit('SET_PRODUCTS', response.data)
      })
  }
}

