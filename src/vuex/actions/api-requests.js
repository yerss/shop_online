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
      }).catch(error => {
        console.log(error)
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
  },
  FILTER_GROUP_REQUEST ({commit}, id) {
    return axios.get(`api/filterGroups/${id}`)
      .then((response) => {
        commit('SET_FILTER', response.data)
      }).catch(error => {
        console.log(error)
      })
  },
  UPDATE_FILTER ({commit}, filter) {
    return axios.put(`api/filterGroups/${filter.id}`, filter)
      .then(response => {
        commit('SET_FILTER', filter)
      }).catch(error => {
        console.log(error)
      })
  },
  ADD_FILTER ({commit}, filter) {
    return axios.post('api/filterGroups', filter)
      .then(response => {
        commit('SET_FILTER', filter)
        console.log('SUCCESS')
      }).catch(error => {
        console.log(error)
      })
  }
}
