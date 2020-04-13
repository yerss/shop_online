// eslint-disable-next-line no-unused-vars
import axios from 'axios'

// eslint-disable-next-line no-unused-vars
const state = {
  filters: [],
  filter: {}
}
// eslint-disable-next-line no-unused-vars
const getters = {
  GET_FILTERS (state) {
    return state.filters
  },
  GET_FILTER (state) {
    return state.filter
  }
}

// eslint-disable-next-line no-unused-vars
const mutations = {
  SAVE_FILTERS: (state, result) => {
    state.filters = result.data
  },
  DELETE_FILTER: (state, id) => {
    let index = state.filters.findIndex(x => x.id === id)
    state.filters.splice(index, 1)
  },
  SET_FILTER: (state, filter) => {
    state.filter = filter
  }
}

// eslint-disable-next-line no-unused-vars
const actions = {
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
  }
}
export default {
  state,
  actions,
  mutations,
  getters
}
