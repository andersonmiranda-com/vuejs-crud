import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
    task: {
      id: "",
      name: "",
      categories: [],
      status: "",
      number: 0,
    }
  },
  mutations: {
    add(state, payload) {
      state.tasks.push(payload)
    },
    delete(state, payload) {
      state.tasks = state.tasks.filter(item => item.id !== payload)
    },
    get(state, payload) {
      state.task = state.tasks.find(item => item.id === payload)
    },
    update(state, payload) {
      state.tasks = state.tasks.map(item => item.id === payload.id ? payload : item)
    }
  },
  actions: {
    addItem({ commit }, item) {
      commit('add', item)
    },
    deleteItem({ commit }, itemId) {
      commit('delete', itemId)
    },
    getItem({ commit }, itemId) {
      commit('get', itemId)
    },
    updateItem({ commit }, item) {
      commit('update', item)
    }
  },
  modules: {}
});
