import axios from 'axios'

const state = {
  brands: [],
  brand_detail: []
}

const getters = {
  BRANDS (state) {
    return state.brands
  },
  BRAND_DETAIL (state) {
    return state.brand_detail
  }
}

const mutations = {
  SET_BRANDS: (state, data) => {
    state.brands = data.data
  },
  SET_BRAND_DETAIL: (state, data) => {
    state.brand_detail = data
  },
  DELETE_BRAND: (state, id) => {
    let index = state.brands.findIndex(x => x.id === id)
    state.brands.splice(index, 1)
  }
}

const actions = {
  GET_BRANDS ({commit}) {
    let overlay = document.querySelector('#overlay')
    if (overlay) overlay.style.display = 'block'
    return axios.get(`api/brands`)
      .then((response) => {
        commit('SET_BRANDS', response.data)
        if (overlay) overlay.style.display = 'none'
      })
  },
  UPDATE_BRAND_DETAIL ({commit}, d) {
    return axios.put(`api/brands/${d.id}`, d.brand)
      .then((response) => {
        // eslint-disable-next-line no-undef
        toast.fire({
          icon: 'success',
          title: 'Успешно изменена'
        })
        d.obj.GET_BRANDS()
      }).catch(error => {
        console.log(error)
      })
  },
  GET_BRAND_DETAIL ({commit}, id) {
    let overlay = document.querySelector('#overlay')
    if (overlay) overlay.style.display = 'block'
    return axios.get(`api/brands/${id}`)
      .then(({data}) => {
        if (overlay) overlay.style.display = 'none'
        commit('SET_BRAND_DETAIL', data.data)
      }).catch(error => {
        console.log(error)
      })
  },
  DELETE_BRAND ({commit}, d) {
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
        axios.delete(`api/brands/${d.id}`)
          .then(({data}) => {
            // eslint-disable-next-line no-undef
            swal.fire(
              'Удалено!',
              'Данные успешно удалены',
              'success'
            )
            commit('DELETE_BRAND', d.id)
            d.obj.GET_BRANDS()
          }).catch(() => {
          // eslint-disable-next-line no-undef
            swal('Filed', 'There was something wrong', 'warning')
          })
        // eslint-disable-next-line handle-callback-err
      }
    })
  },
  ADD_BRAND ({commit}, data) {
    return axios.post(`api/brands`, data)
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
