import API from "./api";
const USER_ROUTE = "/v1/users";
const UserEndPoints = {
  signup(userData) {
    return API().post(`${USER_ROUTE}/signup`, { ...userData });
  },

  login(userData) {
    return API().post(`${USER_ROUTE}/login`, { ...userData });
  },

  updateInfo(userId, userData, userToken) {
    return API(userToken).put(`${USER_ROUTE}/${userId}`, {
      ...userData,
    });
  },

  updatePassword(userData, userToken) {
    return API(userToken).put(`${USER_ROUTE}/updateMyPassword`, {
      ...userData,
    });
  },

  forgetPassword(email) {
    return API().post(`${USER_ROUTE}/forgetPassword`, {
      email,
    });
  },

  resetPassword(data) {
    return API().post(`${USER_ROUTE}/resetPassword`, {
      ...data,
    });
  },
};

export default UserEndPoints;
