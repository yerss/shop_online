import axios from 'axios'

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
    return axios.delete(`'api/filterGroups/${id}`)
      .then(({data}) => {
        commit('DELETE_FILTER', id)
      })
  }
}
