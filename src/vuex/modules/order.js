// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import router from '../../router/router'

// eslint-disable-next-line no-unused-vars
const state = {
  orders: [],
  order_detail: []
}

// eslint-disable-next-line no-unused-vars
const getters = {
  ORDERS (state) {
    return state.orders
  },
  ORDER_DETAIL (state) {
    return state.order_detail
  }
}

// eslint-disable-next-line no-unused-vars
const mutations = {
  SET_ORDERS: (state, data) => {
    state.orders = data.data
  },
  SET_ORDER_DETAIL: (state, data) => {
    state.order_detail = data.data
  },
  DELETE_ORDER: (state, id) => {
    let index = state.orders.findIndex(x => x.id === id)
    state.orders.splice(index, 1)
  }
}

// eslint-disable-next-line no-unused-vars
const actions = {
  GET_ORDERS ({commit}, data) {
    return axios.get(`api/orders`)
      .then((response) => {
        commit('SET_ORDERS', response.data)
      })
  },
  GET_ORDER_DETAIL ({commit}, data) {
    return axios.get(`api/orders/${router.currentRoute.params.id}`)
      .then((response) => {
        commit('SET_ORDER_DETAIL', response.data)
      })
  },
  DELETE_ORDER ({commit}, id) {
    return axios.delete(`api/orders/${id}`)
      .then((response) => {
        commit('DELETE_ORDER', id)
      })
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
