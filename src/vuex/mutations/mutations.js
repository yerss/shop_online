export default {
  SAVE_TOKEN: (state, data) => {
    localStorage.setItem('access_token', data.token)
    state.role = data.role.name
  },
  SAVE_FILTERS: (state, result) => {
    state.filters = result.data
  },
  DELETE_FILTER: (state, id) => {
    let index = state.filters.findIndex(x => x.id === id)
    state.filters.splice(index,1)
  }
}
