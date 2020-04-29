import axios from 'axios'
import router from '../../router/router'

const state = {
  isAuthenticated: !!localStorage.getItem('access_token')
}

const getters = {
  isAuthenticated (state) {
    return state.isAuthenticated
  }
}

const mutations = {
  SET_ACCESS_TOKEN: (state, data) => {
    localStorage.setItem('access_token', data.token)
    localStorage.setItem('user_role', data.role.name)
    state.isAuthenticated = !!localStorage.getItem('access_token')
  },
  LOG_OUT: (state) => {
    state.isAuthenticated = false
  }
}

const actions = {
  SIGN_IN ({commit}, data) {
    return axios.post(`api/login`, data)
      .then((response) => {
        if (response.status === 200) {
          if (response.data.error) {
            if (response.data.error === 'Verify email') {
              // eslint-disable-next-line no-undef
              swal.fire(
                'Please confirm your email',
                'We send referense to your email :)',
                'warning'
              )
            }
            router.push(`/login`)
          } else {
            // console.log(response.data)
            commit('SET_ACCESS_TOKEN', response.data)
            if (response.data.role.name === 'admin') {
              router.push(`/admin`)
            } else {
              router.push(`/`)
            }
          }
        }
        return response
      }).catch(() => {
        // eslint-disable-next-line no-undef
        swal.fire(
          'Incorrect login or password',
          'Please enter again :)',
          'info'
        )
      })
  },
  SIGN_UP ({commit}, data) {
    console.log(data)
    return axios.post(`api/register`, data)
      .then((response) => {
        router.push(`/login`)
        return response
      })
  },
  LOG_OUT ({commit}) {
    return new Promise((resolve, reject) => {
      commit('LOG_OUT')
      localStorage.removeItem('access_token')
      localStorage.removeItem('user_role')
      // remove the axios default header
      delete axios.defaults.headers.common['Authorization']
      resolve()
    }).then(() => {
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
