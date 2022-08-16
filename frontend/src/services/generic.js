import Api from "./api.js";

const GenericEndpoints = {
  get(path, userToken) {
    return Api(userToken).get(`/v1/${path}`);
  },
  delete(path, id, userToken, otherId) {
    let url = otherId
      ? `/v1/${path}/${id}/${otherId}`
      : `/v1/${path}/${id}`;

    return Api(userToken).delete(url);
  },
  post(path, data, userToken, id) {
    let url = id ? `/v1/${path}/${id}` : `/v1/${path}`;
    return Api(userToken).post(url, data);
  },
  put(path, data, userToken) {
    return Api(userToken).put(`/v1/${path}`, data);
  },
};
export default GenericEndpoints;
