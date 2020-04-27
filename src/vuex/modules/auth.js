import axios from 'axios'
import router from '../../router/router'

const state = {

}

const getters = {

}

const mutations = {
  SET_ACCESS_TOKEN: (state, data) => {
    localStorage.setItem('access_token', data.token)
    localStorage.setItem('user_role', data.role.name)
  }
}

const actions = {
  SIGN_IN ({commit}, data) {
    return axios.post(`api/login`, data)
      .then((response) => {
        // console.log(response.data)
        commit('SET_ACCESS_TOKEN', response.data)
        if (response.data.role.name === 'admin') {
          router.push(`/admin`)
        } else {
          router.push(`/`)
        }
        return response
      })
  },
  SIGN_UP ({commit}, data) {
    console.log(data)
    return axios.post(`api/register`, data)
      .then((response) => {
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
