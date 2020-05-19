import axios from "axios";

const dev = process.env.REACT_APP_BASE_API_DEV;
const prod = process.env.REACT_APP_BASE_API_PRO;
const config = process.env.NODE_ENV === "development" ? dev : prod;

console.log("config", config);

const API = axios.create({
  // baseURL: config,
  baseURL: `https://mtr-portfolio.herokuapp.com/api/`,
});

API.defaults.withCredentials = true;

export default API;
