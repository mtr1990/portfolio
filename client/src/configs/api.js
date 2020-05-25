import axios from "axios";

const dev = process.env.REACT_APP_BASE_API_DEV;
const prod = process.env.REACT_APP_BASE_API_PRO;
const config = process.env.NODE_ENV === "development" ? dev : prod;

console.log("API END POINT", config);

const API = axios.create({
  baseURL: config,
});

API.defaults.withCredentials = true;

export default API;
