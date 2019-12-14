import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    numUsers: 10,
  },
  mutations: {
    ADD_USER(state) {
      state.numUsers++;
    },
    REMOVE_USER(state) {
      state.numUsers--;
    },
  },
  actions: {
    addUser({ commit }) {
      commit('ADD_USER');
    },
    removeUser({ commit }) {
      commit('REMOVE_USER');
    },
  },
  modules: {
  },
});
