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
    // eslint-disable-next-line no-undef
    return swal.fire({
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
        axios.delete(`api/categories/${id}`)
          .then((response) => {
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
        return true
      }
      return false
    })
  },
  ADD_CATEGORY ({commit}, data) {
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
