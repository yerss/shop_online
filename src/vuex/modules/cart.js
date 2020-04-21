const state = {
  cart: []
}

const getters = {
  CART (state) {
    return state.cart
  }
}

const mutations = {
  ADD_TO_CART: (state, data) => {
    state.cart.push(data)
  },
  DELETE_FROM_CART: (state, id) => {
    let index = state.cart.findIndex(x => x.id === id)
    state.cart.splice(index, 1)
  }
}

const actions = {
  ADD_ITEM_TO_CART ({commit}, data) {
    commit('ADD_TO_CART', data)
  },
  DELETE_ITEM_FROM_CART ({commit}, id) {
    commit('DELETE_FROM_CART', id)
  }
}

export default {
  state,
  actions,
  mutations,
  getters
}
