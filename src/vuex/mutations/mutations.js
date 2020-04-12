export default {
  SAVE_TOKEN: (state, data) => {
    localStorage.setItem('access_token', data.token)
    state.role = data.role.name
  },
  SET_USERS: (state, data) => {
    state.users = data.data
  },
  SET_ORDERS: (state, data) => {
    state.orders = data.data
  },
  SET_ORDER_DETAIL: (state, data) => {
    state.order_detail = data.data
  },
  SAVE_FILTERS: (state, result) => {
    state.filters = result.data
  },
  DELETE_FILTER: (state, id) => {
    let index = state.filters.findIndex(x => x.id === id)
    state.filters.splice(index, 1)
  },
  DELETE_ORDER: (state, id) => {
    let index = state.orders.findIndex(x => x.id === id)
    state.orders.splice(index, 1)
  },
  DELETE_USER: (state, id) => {
    let index = state.users.findIndex(x => x.id === id)
    state.users.splice(index, 1)
  },
  SET_FILTER: (state, filter) => {
    state.filter = filter
  }
}
