import axios from "axios";
import Cookie from "js-cookie";

// export const TOKEN_KEY = "f32e5b8d0762f05d6f494146988164b24674fa7c";
export const TOKEN_KEY = "dG9rZW5TaW1hbGFi";

function handleRequestSend(config) {
  const token = Cookie.get(TOKEN_KEY);
  if (!!token) config.headers.Authorization = `Token ${token}`;
  console.dir(config);
  return config;
}

function handleRequestError(error) {
  console.dir(error);
  return Promise.reject(error);
}

function handleResponseReceive(response) {
  console.dir(response);
  return response.data;
}

function handleResponseError(error) {
  console.dir(error);
  return Promise.reject(error.response ? error.response.data : error);
}

const baseApi = axios.create({
  // baseURL: "https://34.101.142.194",
  baseURL: "http://localhost:8000",
  headers: {
    post: {
      "Content-Type": "multipart/form-data",
      "Access-Control-Allow-Origin": "*",
    },
    get: {
      "Access-Control-Allow-Origin": "*",
    },
  },
});
baseApi.interceptors.request.use(handleRequestSend, handleRequestError);
baseApi.interceptors.response.use(handleResponseReceive, handleResponseError);

export default baseApi;
