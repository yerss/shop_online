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
  DELETE_FILTER_ATTRIBUTE ({commit}, id) {
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
        axios.delete(`api/filterValues/${id}`)
          .then(({data}) => {
            // eslint-disable-next-line no-undef
            swal.fire(
              'Удалено!',
              'Данные успешно удалены',
              'success'
            )

            commit('DELETE_FILTER', id)
          }).catch(() => {
          // eslint-disable-next-line no-undef
            swal('Filed', 'There was something wrong', 'warning')
          })
        // eslint-disable-next-line handle-callback-err
      }
    })
  },
  DELETE_FILTER ({commit}, id) {
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
        axios.delete(`api/filterGroups/${id}`)
          .then(({data}) => {
            // eslint-disable-next-line no-undef
            swal.fire(
              'Удалено!',
              'Данные успешно удалены',
              'success'
            )

            commit('DELETE_FILTER', id)
          }).catch(() => {
          // eslint-disable-next-line no-undef
            swal('Filed', 'There was something wrong', 'warning')
          })
        // eslint-disable-next-line handle-callback-err
      }
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
  FILTER_ATTRIBUTE_REQUEST ({commit}, id) {
    return axios.get(`api/filterValues/${id}`)
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
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'success',
          title: 'Успешно изменена'
        })
      }).catch(error => {
        console.log(error)
      })
  },
  UPDATE_FILTER_ATTRIBUTE ({commit}, filter) {
    return axios.put(`api/filterValues/${filter.id}`, filter)
      .then(response => {
        commit('SET_FILTER', filter)
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'success',
          title: 'Успешно изменена'
        })
      }).catch(error => {
        console.log(error)
      })
  },
  ADD_FILTER ({commit}, filter) {
    return axios.post('api/filterGroups', filter)
      .then(response => {
        commit('SET_FILTER', filter)
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'success',
          title: 'Успешно добавлена'
        })
      }).catch(error => {
        console.log(error)
      })
  },
  ADD_FILTER_ATTRIBUTE ({commit}, filter) {
    return axios.post('api/filterValues', filter)
      .then(response => {
        commit('SET_FILTER', filter)
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'success',
          title: 'Успешно добавлена'
        })
      }).catch(error => {
        console.log(error)
      })
  },
  FILTERS_ATTRIBUTES_REQUEST ({commit}) {
    return axios.get('api/filterValues')
      .then(({data}) => {
        commit('SAVE_FILTERS', data)
      }).catch(error => {
        console.log(error)
      })
  }
}
