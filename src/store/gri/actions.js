import { example } from "../../services/example.js";

const GET_ME = async ({ commit, state }) => {
  const token = state.global.token;
  let me = null;
  try {
    me = await example(token);
    commit("SET_ME", me);
  } catch (error) {
    console.log("ACTION ERROR", error);
  } finally {
    return me;
  }
};

const LOG_OUT = (store) => {
  store.state.global.keycloak.logout();
};

export { LOG_OUT, GET_ME };
