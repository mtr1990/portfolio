import axios from "axios";

export default axios.create({
  baseURL: `https://mtr-backend.herokuapp.com/api/`
  // baseURL: `http://5cee0e3b1c2baf00142cb9e6.mockapi.io/api/`,
});
