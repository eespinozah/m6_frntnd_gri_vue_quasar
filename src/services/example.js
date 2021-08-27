const example = async (token) => {
  let myHeaders = new Headers();
  let bearerToken = `Bearer ${token}`;

  myHeaders.append("Authorization", bearerToken);

  let url = "https://api.m6-test.m-risk.com/admin/account/me";

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let response = [];
  let json = null;

  try {
    response = await fetch(url, requestOptions);
    json = await response.json();
  } catch {
    console.error("error", error);
  } finally {
    return json;
  }
};

export { example };
