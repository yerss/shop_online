// eslint-disable-next-line no-unused-vars
import axios from 'axios'

// eslint-disable-next-line no-unused-vars
const state = {
  filterGroups: [],
  filterAttributes: [],
  filterAttribute: {},
  filterGroup: {}

}
// eslint-disable-next-line no-unused-vars
const getters = {
  GET_FILTER_GROUPS (state) {
    return state.filterGroups
  },
  GET_FILTER_ATTRIBUTES (state) {
    return state.filterAttributes
  },
  GET_FILTER_GROUP (state) {
    return state.filterGroup
  },
  GET_FILTER_GROUP_NAME (state) {
    return state.filterGroup.name
  },
  GET_FILTER_ATTRIBUTE (state) {
    return state.filterAttribute
  }
}

// eslint-disable-next-line no-unused-vars
const mutations = {
  SET_FILTER_ATTRIBUTE_NAME: (state, name) =>{
    state.filterAttribute.value = name
  },
  SET_FILTER_ATTRIBUTE_ID: (state, id) =>{
    state.filterAttribute.filter_group_id = id
  },
  SET_FILTER_GROUPS: (state, result) => {
    state.filterGroups = result
  },
  DELETE_FILTER_ATTRIBUTE: (state, id) => {
    let index = state.filterAttributes.findIndex(x => x.id === id)
    state.filterAttributes.splice(index, 1)
  },
  DELETE_FILTER_GROUP: (state, id) => {
    let index = state.filterGroups.findIndex(x => x.id === id)
    state.filterGroups.splice(index, 1)
  },
  SET_FILTER_ATTRIBUTES: (state, result) => {
    state.filterAttributes = result
  },
  SET_FILTER_ATTRIBUTE (state, result) {
    state.filterAttribute = result
  },
  SET_FILTER_GROUP (state, result) {
    state.filterGroup = result
  },
  PLUS_FILTER_GROUP (state, filter) {
    state.filterGroups.push(filter)
  },
  PLUS_FILTER_ATTRIBUTE (state, filter) {
    state.filterAttributes.push(filter)
  },
  SET_FILTER_GROUP_NAME (state, name) {
    state.filterGroup.name = name
  }
}

// eslint-disable-next-line no-unused-vars
const actions = {
  SET_FILTER_GROUP_REQUEST ({commit}, result) {
    commit('SET_FILTER_GROUP', result)
  },
  FILTER_GROUP_REQUEST ({commit}, id) {
    return axios.get(`api/filterGroups/${id}`)
      .then(({data}) => {
        commit('SET_FILTER_GROUP', data)
      }).catch(error => {
        console.log(error)
      })
  },
  FILTER_ATTRIBUTE_REQUEST ({commit}, id) {
    return axios.get(`api/filterValues/${id}`)
      .then(({data}) => {
        commit('SET_FILTER_ATTRIBUTE', data)
      }).catch(error => {
        console.log(error)
      })
  },
  UPDATE_FILTER_GROUP ({commit}, filter) {
    return axios.put(`api/filterGroups/${filter.id}`, filter)
      .then(({data}) => {
        commit('SET_FILTER_GROUP', filter)
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
      .then(({data}) => {
        commit('SET_FILTER_ATTRIBUTE', filter)
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'success',
          title: 'Успешно изменена'
        })
      }).catch(error => {
        console.log(error)
      })
  },
  ADD_FILTER_GROUP ({commit}, filter) {
    return axios.post('api/filterGroups', filter)
      .then(response => {
        commit('PLUS_FILTER_GROUP', filter)
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
        commit('PLUS_FILTER_ATTRIBUTE', filter)
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'success',
          title: 'Успешно добавлена'
        })
      }).catch(error => {
        console.log(error)
      })
  },
  FILTER_ATTRIBUTES_REQUEST ({commit}) {
    return axios.get('api/filterValues')
      .then(({data}) => {
        commit('SET_FILTER_ATTRIBUTES', data.data)
      }).catch(error => {
        console.log(error)
      })
  },
  FILTER_GROUPS_REQUEST ({commit}) {
    return axios.get('api/filterGroups')
      .then(({data}) => {
        commit('SET_FILTER_GROUPS', data.data)
      }).catch(error => {
        console.log(error)
      })
  },
  DELETE_FILTER_ATTRIBUTE_REQUEST ({commit}, id) {
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
            commit('DELETE_FILTER_ATTRIBUTE', id)
          }).catch(() => {
          // eslint-disable-next-line no-undef
            swal('Filed', 'There was something wrong', 'warning')
          })
        // eslint-disable-next-line handle-callback-err
      }
    })
  },
  DELETE_FILTER_GROUP_REQUEST ({commit}, id) {
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
            commit('DELETE_FILTER_GROUP', id)
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
