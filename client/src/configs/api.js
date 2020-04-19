import axios from "axios";

const API = axios.create({
  baseURL: `/api/`,
  // baseURL: `https://mtr-portfolio.herokuapp.com/api/`,
});

API.defaults.withCredentials = true;

export default API;
