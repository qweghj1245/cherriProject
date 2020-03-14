import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeUser: '',
  },
  mutations: {
    setActiveUser(state, user) {
      state.activeUser = user;
    },
  },
  actions: {
  },
  getters: {},
  modules: {
  },
});
