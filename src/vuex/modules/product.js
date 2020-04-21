import axios from 'axios'
import router from '../../router/router'

const state = {
  products: [],
  product_detail: {},
  category_products: []
}

const getters = {
  PRODUCTS (state) {
    return state.products
  },
  PRODUCT_DETAIL (state) {
    return state.product_detail
  },
  CATEGORY_PRODUCTS (state) {
    return state.category_products
  }
}
const mutations = {
  SET_PRODUCTS: (state, products) => {
    state.products = products
  },
  SET_PRODUCT_DETAIL: (state, data) => {
    state.product_detail = data.data
  },
  DELETE_PRODUCT: (state, id) => {
    let index = state.products.findIndex(x => x.id === id)
    state.products.splice(index, 1)
  },
  SET_CATEGORY_PRODUCTS: (state, data) => {
    state.category_products = data.data
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
  },
  GET_PRODUCT_DETAIL ({commit}, data) {
    return axios.get(`api/products/${router.currentRoute.params.id}`)
      .then((response) => {
        commit('SET_PRODUCT_DETAIL', response.data)
        return response
      })
  },
  DELETE_PRODUCT ({commit}, id) {
    return axios.delete(`api/products/${id}`)
      .then((response) => {
        commit('DELETE_PRODUCT', id)
      })
  },
  ADD_PRODUCT ({commit}, data) {
    return axios.post(`api/products`, data)
      .then((response) => {
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'success',
          title: 'Успешно добавлена'
        })
      }).catch(error => {
        console.log(error)
      })
  },
  GET_CATEGORY_PRODUCTS ({commit}, data) {
    return axios.get(`api/products?categories[]=${router.currentRoute.params.id}`)
      .then((response) => {
        commit('SET_CATEGORY_PRODUCTS', response.data)
        return response
      })
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
