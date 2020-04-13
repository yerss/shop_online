import axios from 'axios'
const state = {
  products: []
}
const getters = {
  GET_PRODUCTS (state) {
    return state.products
  }
}
const mutations = {
  SET_PRODUCTS (state, products) {
    state.products = products
  }
}
const actions = {
  PRODUCTS_LIST_REQUEST ({commit}) {
    // eslint-disable-next-line no-undef
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
