import axios from 'axios'
import router from '../../router/router'

export default {
  SIGN_UP ({commit}, data) {
    return axios.post(`api/register`, data)
      .then((response) => {
        return response
      })
  },
  SIGN_IN ({commit}, data) {
    return axios.post(`api/login`, data)
      .then((response) => {
        console.log(response.data)
        commit('SAVE_TOKEN', response.data)
        return response
      })
  },
  FILTERS_LIST_REQUEST ({commit}) {
    return axios.get('api/filterGroups')
      .then(({data}) => {
        commit('SAVE_FILTERS', data)
      })
  },
  DELETE_FILTER ({commit}, id) {
    return axios.delete(`api/filterGroups/${id}`)
      .then(({data}) => {
        commit('DELETE_FILTER', id)
      })
  },
  GET_USERS ({commit}, data) {
    return axios(`api/users`, {
      method: 'GET'
    }).then((response) => {
      commit('SET_USERS', response.data)
    })
  },
  GET_ORDERS ({commit}, data) {
    return axios(`api/orders`, {
      method: 'GET'
    }).then((response) => {
      commit('SET_ORDERS', response.data)
    })
  },
  GET_ORDER_DETAIL ({commit}, data) {
    return axios(`api/orders/${router.currentRoute.params.id}`, {
      method: 'GET'
    }).then((response) => {
      commit('SET_ORDER_DETAIL', response.data)
    })
  }
}
