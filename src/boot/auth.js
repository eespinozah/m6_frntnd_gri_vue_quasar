// boot / auth.js;
import Keycloak from "keycloak-js";

const getRealm = (hashLocation) => {
  return hashLocation.slice(2, hashLocation.length).split("&")[0];
};

const hashLocation = window.location.hash;
// const realm = getRealm(hashLocation);

const realm = "mriskad";
const clientId = "gri";
const url = "https://auth.m6-test.m-risk.com/auth";

//  realm = "mriskad";

let initOptions = {
  url,
  realm,
  clientId,
  onLoad: "login-required",
};

let keycloak = Keycloak(initOptions);

export default async ({ store }) => {
  console.log("store auth", store);

  const auth = await keycloak.init({ onLoad: initOptions.onLoad });

  store.commit("gri/SET_KEYCLOAK", keycloak);
  store.commit("gri/SET_KEYCLOAK_TOKEN", keycloak.idToken);

  console.log("keycloak.idToken", keycloak);

  // store.dispatch("gri/LOG_OUT");

  if (!auth) {
    window.location.reload();
    return;
  }

  // keycloak.logout();

  //Token Refresh
  setInterval(() => {
    keycloak
      .updateToken(70)
      .then((refreshed) => {
        if (refreshed) {
          store.commit("gri/SET_KEYCLOAK_TOKEN", keycloak.idToken);
        }
      })
      .catch((e) => {
        console.log("error :", e);
      });
  }, 6000);
};

export { keycloak };
