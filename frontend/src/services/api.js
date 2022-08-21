import axios from "axios";

const API = (userToken) => {
  return axios.create({
    baseURL: `http://localhost:4050/api`,
    // baseURL: `https://muscleandstrength-v2-backend-hedecw44s-nur1208.vercel.app/api`,

    headers: userToken ? { access_token: userToken } : {},
  });
};
export default API;
