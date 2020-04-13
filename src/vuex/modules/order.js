// eslint-disable-next-line no-unused-vars
import axios from 'axios'
import router from '../../router/router'

// eslint-disable-next-line no-unused-vars
const state = {
  orders: [],
  order_detail: {}
}

// eslint-disable-next-line no-unused-vars
const getters = {
  ORDERS (state) {
    return state.orders
  },
  ORDER_DETAIL (state) {
    return state.order_detail
  }
}

// eslint-disable-next-line no-unused-vars
const mutations = {
  SET_ORDERS: (state, data) => {
    state.orders = data
  },
  SET_ORDER_DETAIL: (state, data) => {
    state.order_detail = data
  },
  DELETE_ORDER: (state, id) => {
    let index = state.orders.findIndex(x => x.id === id)
    state.orders.splice(index, 1)
  }
}

// eslint-disable-next-line no-unused-vars
const actions = {
  GET_ORDERS ({commit}, data) {
    return axios.get(`api/orders`)
      .then((response) => {
        let orders = response.data.data
        for (let i = 0; i < orders.length; i++) {
          // eslint-disable-next-line eqeqeq,no-unused-expressions
          if (orders[i].status == 0) orders[i].status = 'Новый'
          // eslint-disable-next-line no-unused-expressions,eqeqeq
          else if (orders[i].status == 1)orders[i].status = 'Завершен'
          // eslint-disable-next-line eqeqeq,no-unused-expressions
          else if (orders[i].status == 1)orders[i].status = 'Удален'
        }
        commit('SET_ORDERS', orders)
      })
  },
  GET_ORDER_DETAIL ({commit}, data) {
    return axios.get(`api/orders/${router.currentRoute.params.id}`)
      .then((response) => {
        commit('SET_ORDER_DETAIL', response.data)
        return response
      })
  },
  DELETE_ORDER ({commit}, id) {
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
        axios.delete(`api/orders/${id}`)
          .then(({data}) => {
            // eslint-disable-next-line no-undef
            swal.fire(
              'Удалено!',
              'Данные успешно удалены',
              'success'
            )

            commit('DELETE_ORDER', id)
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
