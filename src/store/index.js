import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from "vuex-persistedstate";
Vue.use(Vuex)
export default new Vuex.Store({
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
    }),
  ],
  state: {
    CurrentUser:[],
    Users:[],
  },
  getters: {
    CurrentUser: (state) => state.CurrentUser,
    Users: (state) => state.Users,
  },
  mutations: {
    user(state, st) {
      state.CurrentUser = st;
    },
    Totalusers(state, st) {
      state.Users = st;
    },
  },
  actions: {
  },
  modules: {
  }
})
