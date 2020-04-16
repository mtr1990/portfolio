import axios from "axios";

const API = axios.create({
  // DEV
  // baseURL: `/api/`,
  // PRODUCTION
  baseURL: `https://mtr-portfolio.herokuapp.com/api/`,
});

API.defaults.withCredentials = true;

export default API;
