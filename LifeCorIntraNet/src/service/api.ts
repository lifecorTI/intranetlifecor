var baseUrl = import.meta.env.VITE_API_BASE_URL;

export const apiPost = async (route: string, data: object) => {
  const options = {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(baseUrl + "" + route, options)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      err;
    });

  return response;
};

export const apiGet = async (route: string) => {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(baseUrl + "" + route, options)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) => {
      err;
    });

  return response;
};
