import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import gri from "./gri";
// import module-example from "./module-example";

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

// this is a little store for ui state management
const ui = {
  namespaced: true,
  state: {
    darkMode: false,
    lightMode: true,
  },
  actions: {
    toggleDark({ commit }) {
      commit("setDark");
    },
  },
  mutations: {
    setDark(state) {
      state.darkMode = !state.darkMode;
      state.lightMode = !state.darkMode;
    },
  },
};

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      // module-example,
      ui,
      gri,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
