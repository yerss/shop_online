import axios from 'axios'

const state = {
  users: [],
  user: {},
  roles: [],
  role: '',
  editUser: {
    role: {
      id: 1
    }
  }
}

const getters = {
  USER_ROLE (state) {
    return state.role
  },
  GET_ORDERS (state) {
    return state.editUser.orders
  },
  USERS (state) {
    return state.users
  },
  ROLES (state) {
    return state.roles
  },
  USER (state) {
    return state.user
  },
  GET_EDIT_USER (state) {
    return state.editUser
  }
}

const mutations = {
  SET_ORDER (satate, index, status) {
    state.editUser.orders[index].status = status
  },
  SET_EDIT_USER (state, user) {
    state.editUser = user
  },
  SET_USER_NAME (state, name) {
    state.user.name = name
  },
  SET_USER_EMAIL (state, email) {
    state.user.email = email
  },
  SET_USER_PASSWORD (state, password) {
    state.user.password = password
  },
  SET_USER_CONFIRM_PASSWORD (state, confirmPassword) {
    state.user.confirmPassword = confirmPassword
  },
  // eslint-disable-next-line camelcase
  SET_USER_ROLE (state, role_id) {
    // eslint-disable-next-line camelcase
    state.user.role_id = role_id
  },
  SET_EDIT_USER_NAME (state, name) {
    state.editUser.name = name
  },
  SET_EDIT_USER_EMAIL (state, email) {
    state.editUser.email = email
  },
  SET_EDIT_USER_PASSWORD (state, password) {
    state.editUser.password = password
  },
  SET_EDIT_USER_CONFIRM_PASSWORD (state, confirmPassword) {
    state.editUser.confirmPassword = confirmPassword
  },
  // eslint-disable-next-line camelcase
  SET_EDIT_USER_ROLE (state, role_id) {
    // eslint-disable-next-line camelcase
    state.editUser.role.id = role_id
  },
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
  },
  CLEAR_USER (state) {
    state.user = {}
    state.user.role_id = 1
  }
}

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
  GET_EDIT_USER_REQUEST ({commit}, id) {
    return axios.get(`api/users/${id}`)
      .then(({data}) => {
        let orders = data.data.orders
        let role = data.data.role
        // eslint-disable-next-line eqeqeq
        if (role.name == 'admin') role.id = 1
        // eslint-disable-next-line eqeqeq
        if (role.name == 'moderator') role.id = 2
        // eslint-disable-next-line eqeqeq
        if (role.name == 'user') role.id = 3
        for (let i = 0; i < orders.length; i++) {
          // eslint-disable-next-line eqeqeq
          if (orders[i].status == '0') orders[i].status = 'Новый'
          // eslint-disable-next-line eqeqeq
          else if (orders[i].status == '"') orders[i].status = 'Завершен'
          // eslint-disable-next-line eqeqeq
          else if (orders[i].status == 'ә') orders[i].status = 'Удален'
        }
        data.data.orders = orders
        data.data.role = role
        commit('SET_EDIT_USER', data.data)
      }).catch(error => {
        console.log(error)
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
  GET_ROLES_REQUEST ({commit}) {
    return axios.get(`api/roles`)
      .then(({data}) => {
        let roles = data.data
        for (let i = 0; i < roles.length; i++) roles[i].id = i + 1
        data.data = roles
        commit('SET_ROLES', data.data)
      })
  },
  ADD_USER_REQUEST ({commit}, user) {
    console.log(user)
    return axios.post('api/users', user)
    // eslint-disable-next-line no-unreachable
      .then(response => {
        commit('CLEAR_USER')
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
  },
  UPDATE_EDIT_USER ({commit}, user) {
    return axios.put(`api/users/${user.id}`, user)
      .then(response => {
        commit('SET_EDIT_USER', user)
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
