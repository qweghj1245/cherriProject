import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeUser: '',
    lang: 'tw',
    todoList: [],
  },
  mutations: {
    setActiveUser(state, user) {
      state.activeUser = user;
    },
    setLang(state, language) {
      state.lang = language;
    },
    setTodoList(state, list) {
      state.todoList.push(list);
    },
    deleteTodoList(state, id) {
      state.todoList = state.todoList.filter(item => item.id !== id);
    },
  },
  actions: {
  },
  getters: {},
  modules: {
  },
});
