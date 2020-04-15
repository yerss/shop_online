import axios from 'axios'
import router from '../../router/router'

const state = {
  categories: [],
  category_detail: [],
  subcategory: []
}

const getters = {
  CATEGORIES (state) {
    return state.categories
  },
  CATEGORY_DETAIL (state) {
    return state.category_detail
  },
  SUBCATEGORY (state) {
    return state.subcategory
  }
}

const mutations = {
  SET_CATEGORIES: (state, data) => {
    state.categories = data.data
  },
  SET_CATEGORY_DETAIL: (state, data) => {
    state.category_detail = data.data
  },
  SET_SUBCATEGORY: (state, category) => {
    state.subcategory = category.categories
  }
}

const actions = {
  GET_CATEGORIES ({commit}, data) {
    return axios.get(`api/categories`)
      .then((response) => {
        commit('SET_CATEGORIES', response.data)
      })
  },
  GET_SUBCATEGORY ({commit}, data) {
    let id = data | 0
    let category = state.categories.find(x => x.id === id)
    commit('SET_SUBCATEGORY', category)
  },
  GET_CATEGORY_DETAIL ({commit}, data) {
    return axios.get(`api/categories/${router.currentRoute.params.id}`)
      .then((response) => {
        commit('SET_CATEGORY_DETAIL', response.data)
        return response
      })
  },
  DELETE_CATEGORY ({commit}, id) {
    return axios.delete(`api/categories/${id}`)
  },
  ADD_CATEGORY ({commit}, data) {
    console.log(data)
    return axios.post(`api/categories`, data)
      .then((response) => {
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'success',
          title: 'Успешно добавлена'
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
