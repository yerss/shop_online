import axios from 'axios'
import router from '../../router/router'

const state = {
  products: [],
  product_detail: {},
  product_categories: []
}

const getters = {
  PRODUCTS (state) {
    return state.products
  },
  PRODUCT_DETAIL (state) {
    return state.product_detail
  },
  PRODUCT_CATEGORIES (state) {
    return state.product_categories
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
    state.products.splice(index, 1)
  },
  ADD_PRODUCT_CATEGORY: (state, data) => {
    state.product_categories.push({...data})
  },
  DELETE_PRODUCT_CATEGORIES: (state, id) => {
    let index = state.product_categories.findIndex(x => x.id === id)
    state.product_categories.splice(index, 1)
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
        commit('SET_PRODUCT_DETAIL')
        return response
      })
  },
  DELETE_PRODUCT ({commit}, id) {
    return axios.delete(`api/products/${id}`)
      .then((response) => {
        commit('DELETE_PRODUCT', id)
      })
  },
  ADD_PRODUCT_CATEGORIES ({commit}, data) {
    commit('ADD_PRODUCT_CATEGORY', data)
  },
  DELETE_PRODUCT_CATEGORIES ({commit}, id) {
    commit('DELETE_PRODUCT_CATEGORIES', id)
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
