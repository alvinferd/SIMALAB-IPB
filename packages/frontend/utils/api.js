import axios from "axios";

export const TOKEN_KEY = "39245ba233a67f03b5d969191660e608c36c4cda";

function handleRequestSend(config) {
  config.headers.Authorization = `Token ${TOKEN_KEY}`;
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
  baseURL: "http://localhost:8000/api",
  headers: {
    post: {
      "Content-Type": "application/json;charset=utf-8",
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
