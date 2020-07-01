import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    first: true,
    notready: true,
    headstart: true
  },
  mutations: {
    falsefirst (state) {
      state.first = false
    },
    truefirst (state) {
      state.first = true
    },
    falsenotready (state) {
      state.notready = false
    },
    truenotready (state) {
      state.notready = true
    },
    falseheadstart (state) {
      state.headstart = false
    },
    trueheadstart (state) {
      state.headstart = true
    },
    checkstate (state, payload) {
      let arr = ['C', '%', '^', '/', '*', '+', '-', '(', ')']
      if (payload === '=') {
        return state.notready
      } else if (arr.includes(payload)) {
        return state.headstart
      } else {
        return false
      }
    },
    checkfirst (state) {
      return state.first
    }
  }
})
