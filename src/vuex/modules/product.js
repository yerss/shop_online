import axios from 'axios'
const state = {
  products: [],
  product_detail: {}
}

const getters = {
  GET_PRODUCTS (state) {
    return state.products
  },
  PRODUCT_DETAIL (state) {
    return state.product_detail
  }
}
const mutations = {
  SET_PRODUCTS (state, products) {
    state.products = products
  },
  SET_PRODUCT_DETAIL: (state, data) => {
    state.product_detail = data
  },
  DELETE_PRODUCT: (state, id) => {
    let index = state.products.findIndex(x => x.id === id)
    state.orders.splice(index, 1)
  }
}
const actions = {
  PRODUCTS_LIST_REQUEST ({commit}) {
    return axios.get('api/products')
      .then(({data}) => {
        commit('SET_PRODUCTS', data.data)
      }).catch(error => {
        console.log(error)
      })
  }
}
export default {
  state, getters, mutations, actions
}
