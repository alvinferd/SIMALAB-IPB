import axios from "axios";

const baseApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
});

export default baseApi;
