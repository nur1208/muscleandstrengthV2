import axios from "axios";

const API = (userToken) => {
  return axios.create({
    baseURL: `http://localhost:4050/api`,
    headers: userToken ? { access_token: userToken } : {},
  });
};
export default API;
