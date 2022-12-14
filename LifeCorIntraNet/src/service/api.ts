var baseUrl = import.meta.env.VITE_API_BASE_URL;

function errorToken() {
  localStorage.removeItem("@lifeCor:token");
  localStorage.removeItem("@lifeCor:user");
}

const token = "Bearer" + " " + localStorage.getItem("@lifeCor:token");

export const apiPostXml = async (route: string, data: FormData) => {
  console.log(data);
  const options = {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  };

  const response = await fetch(baseUrl + "" + route, options)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);

  return response;
};

export const apiPost = async (route: string, data: object) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  };

  const response = await fetch(baseUrl + "" + route, options)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);

  return response;
};

export const apiGet = async (route: string) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  };

  const response = await fetch(baseUrl + "" + route, options)
    .then((res) => {
      return res.json();
    })
    .then((res) => res)
    .catch((err) => err);

  return response;
};

export const apiDelete = async (route: string, data: object) => {
  const options = {
    method: "DELETE",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  };

  const response = await fetch(baseUrl + "" + route, options)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => err);

  return response;
};
