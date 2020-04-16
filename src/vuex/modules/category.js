import axios from 'axios'
import router from '../../router/router'

const state = {
  categories: [],
  category_detail: [],
  category_subcategories: [],
  product_categories: []
}

const getters = {
  CATEGORIES (state) {
    return state.categories
  },
  CATEGORY_DETAIL (state) {
    return state.category_detail
  },
  CATEGORY_SUBCATEGORIES (state) {
    return state.category_subcategories
  },
  PRODUCT_CATEGORIES (state) {
    return state.product_categories
  }
}

const mutations = {
  SET_CATEGORIES: (state, data) => {
    state.categories = data.data
  },
  SET_CATEGORY_DETAIL: (state, data) => {
    state.category_detail = data.data
  },
  SET_CATEGORY_SUBCATEGORIES: (state, data) => {
    state.category_subcategories = data.categories
  },
  ADD_PRODUCT_CATEGORY: (state, id) => {
    let data = {id: '', name: ''}
    let subcategory = state.category_subcategories.find(x => x.id === id)
    data.id = id
    data.name = subcategory.name
    state.product_categories.push(data)
  },
  DELETE_PRODUCT_CATEGORY: (state, id) => {
    let index = state.product_categories.findIndex(x => x.id === id)
    state.product_categories.splice(index, 1)
  }
}

const actions = {
  GET_CATEGORIES ({commit}, data) {
    return axios.get(`api/categories`)
      .then((response) => {
        commit('SET_CATEGORIES', response.data)
      })
  },
  GET_CATEGORY_SUBCATEGORIES ({commit}, id) {
    return axios.get(`api/categories/${id}`)
      .then((response) => {
        commit('SET_CATEGORY_SUBCATEGORIES', response.data.data)
      })
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
  },
  ADD_PRODUCT_CATEGORY ({commit}, id) {
    commit('ADD_PRODUCT_CATEGORY', id)
  },
  DELETE_PRODUCT_CATEGORY ({commit}, id) {
    commit('DELETE_PRODUCT_CATEGORY', id)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
