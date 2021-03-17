import { createStore } from "vuex";

export default createStore({
  state: {
    tasks: [],
    task: {
      id: "",
      name: "",
      categories: [],
      status: "Normal",
      number: 0,
    }
  },
  mutations: {
    loadItems(state, payload){
      state.tasks = payload
    },
    add(state, payload) {
      state.tasks.push(payload)
      localStorage.setItem('tasks',JSON.stringify(state.tasks))
    },
    delete(state, payload) {
      state.tasks = state.tasks.filter(item => item.id !== payload)
      localStorage.setItem('tasks',JSON.stringify(state.tasks))
    },
    get(state, payload) {
      state.task = state.tasks.find(item => item.id === payload) || {}
    },
    update(state, payload) {
      state.tasks = state.tasks.map(item => item.id === payload.id ? payload : item)
      localStorage.setItem('tasks',JSON.stringify(state.tasks))
    }
  },
  actions: {
    loadItemsFromLocalStorage({commit}){
      const tasks = localStorage.getItem('tasks')
      if(tasks) {
        commit('loadItems', JSON.parse(tasks), JSON.stringify([]))
      } else {
        localStorage.setItem('tasks',JSON.stringify([]))
      }
    },
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
