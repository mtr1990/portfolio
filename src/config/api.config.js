import axios from "axios";

export default axios.create({
  baseURL: `https://mtr-backend.herokuapp.com/api/`
});
