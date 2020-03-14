import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    activeUser: '',
    lang: 'tw',
  },
  mutations: {
    setActiveUser(state, user) {
      state.activeUser = user;
    },
    setLang(state, language) {
      state.lang = language;
    },
  },
  actions: {
  },
  getters: {},
  modules: {
  },
});
