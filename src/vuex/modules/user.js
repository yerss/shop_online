// eslint-disable-next-line no-unused-vars
import axios from 'axios'

// eslint-disable-next-line no-unused-vars
const state = {
  users: [],
  user: {},
  roles: [],
  role: ''
}

// eslint-disable-next-line no-unused-vars
const getters = {
  USER_ROLE (state) {
    return state.role
  },
  USERS (state) {
    return state.users
  },
  ROLES (state) {
    return state.roles
  },
  USER (state) {
    return state.user
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
  },
  SET_ROLES: (state, roles) => {
    state.roles = roles
  },
  SET_USER (state, user) {
    state.user = user
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
    // eslint-disable-next-line no-undef
    swal.fire({
      title: 'Вы уверены что хотите удалить?',
      text: 'Вы не сможете потом вернуть эти данные!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Удалить',
      cancelButtonText: 'Отмена'
    }).then((result) => {
      if (result.value) {
        axios.delete(`api/users/${id}`)
          .then(({data}) => {
            commit('DELETE_USER', id)
            // eslint-disable-next-line no-undef
            swal.fire(
              'Удалено!',
              'Данные успешно удалены',
              'success'
            )
          }).catch(() => {
          // eslint-disable-next-line no-undef
            swal('Filed', 'There was something wrong', 'warning')
          })
        // eslint-disable-next-line handle-callback-err
      }
    })
  },
  GET_ROLES_REQUEST ({commit}, id) {
    return axios.get(`api/roles`)
      .then(({data}) => {
        commit('SET_ROLES', data.data)
      })
  },
  ADD_USER_REQUEST ({commit}, user) {
    console.log(user)
    return axios.post('api/users', user)
    // eslint-disable-next-line no-unreachable
      .then(response => {
        commit('SET_USER', user)
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'success',
          title: 'Пользователь успешно добавлен'
        })
      }).catch(error => {
        console.log(error)
      })
  },
  GET_USER_REQUEST ({commit}, id) {
    return axios.get(`api/users/${id}`)
      .then(({data}) => {
        commit('SET_USER', data.data)
      }).catch(error => {
        console.log(error)
      })
  },
  UPDATE_USER ({commit}, user) {
    return axios.put(`api/users/${user.id}`, user)
      .then(response => {
        commit('SET_USER', user)
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'success',
          title: 'Успешно изменена'
        })
      }).catch(error => {
        console.log(error)
      })
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
