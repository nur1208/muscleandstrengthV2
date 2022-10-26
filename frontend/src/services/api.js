import axios from "axios";

const API = (userToken) => {
  return axios.create({
    // baseURL: `http://localhost:4050/api`,
    baseURL: `https://muscleandstrength-v2-backend.vercel.app/api`,

    headers: userToken
      ? { authorization: `Bearer ${userToken}` }
      : {},
  });
};
export default API;
