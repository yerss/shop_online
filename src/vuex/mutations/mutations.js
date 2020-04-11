export default {
  SAVE_TOKEN: (state, data) => {
    localStorage.setItem('access_token', data.token)
    state.role = data.role.name
  }
}
