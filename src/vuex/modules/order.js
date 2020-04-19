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
  GET_ORDERS ({commit}) {
    let overlay = document.querySelector('#overlay')
    if (overlay) overlay.style.display = 'block'
    return axios.get(`api/orders`)
      .then((response) => {
        let orders = response.data.data
        for (let i = 0; i < orders.length; i++) {
          // eslint-disable-next-line eqeqeq,no-unused-expressions
          if (orders[i].status == 0) orders[i].status = 'Новый'
          // eslint-disable-next-line no-unused-expressions,eqeqeq
          else if (orders[i].status == 1)orders[i].status = 'Одобрен'
          // eslint-disable-next-line eqeqeq,no-unused-expressions
          else if (orders[i].status == 2)orders[i].status = 'Откланен'
        }
        commit('SET_ORDERS', orders)
        if (overlay) overlay.style.display = 'none'
      })
  },
  GET_ORDER_DETAIL ({commit}, data) {
    let overlay = document.querySelector('#overlay')
    if (overlay) overlay.style.display = 'block'
    return axios.get(`api/orders/${router.currentRoute.params.id}`)
      .then((response) => {
        commit('SET_ORDER_DETAIL', response.data.data)
        if (overlay) overlay.style.display = 'none'
        return response
      })
  },
  UPDATE_ORDER ({commit}, order) {
    // eslint-disable-next-line no-undef
    return axios.put(`api/orders/${order.id}`, order)
      .then(({data}) => {
        // eslint-disable-next-line no-undef,eqeqeq
        console.log(order)
        // eslint-disable-next-line eqeqeq
        if (order.status == '1') {
          commit('SET_ORDER_DETAIL', order)
          // eslint-disable-next-line no-undef
          toast.fire({
            icon: 'success',
            title: 'Заказ одобрен'
          })
          // eslint-disable-next-line eqeqeq
        } else if (order.status == '0') {
          commit('SET_ORDER_DETAIL', order)
          // eslint-disable-next-line no-undef
          toast.fire({
            icon: 'success',
            title: 'Заказ вернулся на доработку'
          })
        } else {
          commit('SET_ORDER_DETAIL', order)
          // eslint-disable-next-line no-undef
          toast.fire({
            icon: 'success',
            title: 'Заказ откланен'
          })
        }
      }).catch(error => {
        console.log(error)
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
