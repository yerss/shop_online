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
  PRODUCT_DETAIL (state) {
    return state.product_detail
  }
}
const mutations = {
  SET_PRODUCTS (state, products) {
    state.products = products
  },
  SET_PRODUCT_DETAIL: (state, data) => {
    state.product_detail = data.data
  },
  DELETE_PRODUCT: (state, id) => {
    let index = state.products.findIndex(x => x.id === id)
    state.products.splice(index, 1)
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
  }
}
export default {
  state,
  getters,
  mutations,
  actions
}
