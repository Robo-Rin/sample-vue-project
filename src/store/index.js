import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    data: [],
    numUsers: 10,
  },
  mutations: {
    ADD_USER(state) {
      state.numUsers++;
    },
    REMOVE_USER(state) {
      state.numUsers--;
    },
    LOAD_DATA(state, data) {
      state.data = data;
    },
  },
  actions: {
    addUser({ commit, state }) {
      if (state?.numUsers < state?.data?.length - 1) {
        commit('ADD_USER');
      } else {
        // Alert popups are generally bad UX, but using for the sake of time
        alert('ERROR: There are no more users available to add!');
      }
    },
    removeUser({ commit, state }) {
      if (state?.numUsers > 0) {
        commit('REMOVE_USER');
      } else {
        // Alert popups are generally bad UX, but using for the sake of time
        alert('ERROR: There are no more users left to remove!');
      }
    },
    loadData({ commit }, data) {
      commit('LOAD_DATA', data);
    },
  },
});
