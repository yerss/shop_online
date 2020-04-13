// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import router from '../../router/router'

// eslint-disable-next-line no-unused-vars
const state = {
  users: [],
  role: ''
}

// eslint-disable-next-line no-unused-vars
const getters = {
  USER_ROLE (state) {
    return state.role
  },
  USERS (state) {
    return state.users
  }
}

// eslint-disable-next-line no-unused-vars
const mutations = {
  SAVE_TOKEN: (state, data) => {
    localStorage.setItem('access_token', data.token)
    state.role = data.role.name
  },
  SET_USERS: (state, data) => {
    state.users = data.data
  },
  DELETE_USER: (state, id) => {
    let index = state.users.findIndex(x => x.id === id)
    state.users.splice(index, 1)
  }
}

// eslint-disable-next-line no-unused-vars
const actions = {
  SIGN_UP ({commit}, data) {
    return axios.post(`api/register`, data)
      .then((response) => {
        return response
      })
  },
  SIGN_IN ({commit}, data) {
    return axios.post(`api/login`, data)
      .then((response) => {
        // console.log(response.data)
        commit('SAVE_TOKEN', response.data)
        return response
      })
  },
  GET_USERS ({commit}, data) {
    return axios.get(`api/users`)
      .then((response) => {
        commit('SET_USERS', response.data)
      })
  },
  DELETE_USER ({commit}, id) {
    return axios.delete(`api/users/${id}`)
      .then((response) => {
        commit('DELETE_USER', id)
      })
    // eslint-disable-next-line no-unreachable
    return axios(`api/orders/${router.currentRoute.params.id}`, {
      method: 'GET'
    }).then((response) => {
      commit('SET_ORDER_DETAIL', response.data)
    })
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
