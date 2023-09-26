import { createStore } from 'vuex'

export default createStore({
  state: {
    successMessage: '',
  },
  mutations: {
    setSuccessMessage(state, message) {
      state.successMessage = message
    },
    clearSuccessMessage(state) {
      state.successMessage = ''
    },
  },
  actions: {
    setSuccessMessage({ commit }, message) {
      commit('setSuccessMessage', message)
    },
    clearSuccessMessage({ commit }) {
      commit('clearSuccessMessage')
    },
  },
  getters: {
    successMessage: (state) => state.successMessage,
  },
})
