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
  }
}
