export default {
  namespaced: true,
  state: {
    todolist: [
      {
        name: '吃饭',
        done: false,
        id: 1
      },
      {
        name: '睡觉',
        done: false,
        id: 2
      },
      {
        name: '打豆豆',
        done: false,
        id: 3
      }
    ]
  },
  mutations: {
    deltodolist(state, payLoad) {
      state.todolist = state.todolist.filter((item) => item !== payLoad)
    },
    addtodolist(state, payLoad) {
      state.todolist.unshift(payLoad)
    }
  },
  actions: {
    deltodolist({ commit }, payLoad) {
      commit('deltodolist', payLoad)
    },
    addtodolist({ commit }, payLoad) {
      commit('addtodolist', payLoad)
    }
  },
  getters: {},
  modules: {}
}
