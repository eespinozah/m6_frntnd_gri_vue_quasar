export function SET_KEYCLOAK(state, instance) {
  state.global.keycloak = instance;
}

export function SET_KEYCLOAK_TOKEN(state, token) {
  state.global.token = token;
}

export function SET_ME(state, me) {
  state.global.me = me;
}