import { UserEndPoints } from "../../services";
import { fetchData, removeCookie, setCookie } from "../../utils";
import { USER_ACTIONS } from "../constants";

const saveUserData = (userData, token) => {
  const serverUserDate = {
    ...userData,
    token,
  };

  setCookie(
    "userData",
    JSON.stringify({ ...serverUserDate, cart: [] }),
    3
  );

  return serverUserDate;
};

export const signUp =
  (userData, response) => async (dispatch, getState) => {
    try {
      response && response("signing up");
      dispatch({ type: USER_ACTIONS.SIGN_UP.LOADING });
      // response.data.doc
      const { data } = await UserEndPoints.signup(userData);

      response &&
        response("signed up and logged in successfully");
      response && response(`welcome ${userData.name}`);

      const serverUserDate = saveUserData(
        data.data.user,
        data.token
      );
      dispatch({
        type: USER_ACTIONS.SIGN_UP.SUCCESS,
        payload: serverUserDate,
      });
    } catch (error) {
      response && response("signing up failed");

      if (error.response.status === 400) {
        response && response(`${userData.email} email is exist`);
      } else {
        response &&
          response("something went wrong while signing up");
      }

      response &&
        response("if you want to try again say, 'sign up");

      const errorMessage = error?.response?.data?.message
        ? error?.response?.data?.message
        : error.message;

      dispatch({
        type: USER_ACTIONS.SIGN_UP.FALL,
        payload: errorMessage,
      });
    }
  };

export const autoLogin = (userDate) => async (dispatch) =>
  dispatch({
    type: USER_ACTIONS.AUTO_LOGIN,
    payload: userDate,
  });

export const updateField = (data) => (dispatch) =>
  dispatch({ type: USER_ACTIONS.UPDATE_FIELD, payload: data });
export const getMe = () => async (dispatch, getState) =>
  fetchData(
    "users",
    USER_ACTIONS.GET_ME,
    dispatch,
    (data) => ({
      cart: data.cart,
    }),
    getState().user_store.userData.token
  );
export const login =
  (userData, response) => async (dispatch, getState) => {
    try {
      response && response("logging in");
      dispatch({ type: USER_ACTIONS.LOGIN.LOADING });
      // response.data.doc
      const { data } = await UserEndPoints.login(userData);
      // const { data } = await axios.post(
      //   `${BACKEND_API_URL}/${USER_ROUTE}/login`,
      //   {
      //     ...userData,
      //   }
      // );

      response && response("logged in successfully");
      response &&
        response(`welcome back ${data.data.user.name}`);

      // const serverUserDate = {
      //   ...data.data.user,
      //   token: data.token,
      // };
      // localStorage.setItem(
      //   "userData",
      //   JSON.stringify(serverUserDate)
      // );

      const serverUserDate = saveUserData(
        data.data.user,
        data.token
      );
      dispatch({
        type: USER_ACTIONS.LOGIN.SUCCESS,
        payload: serverUserDate,
      });
    } catch (error) {
      response && response("logging in failed");

      const errorMessage = error?.response?.data?.message
        ? error?.response?.data?.message
        : error.message;

      response && response(errorMessage);

      response &&
        response("if you want to try again say, login");

      dispatch({
        type: USER_ACTIONS.LOGIN.FALL,
        payload: errorMessage,
      });
    }
  };

export const updateCurrentUserAction =
  (data) => async (dispatch) =>
    dispatch({
      type: USER_ACTIONS.CURRENT_ACTION,
      payload: data,
    });

export const updateUserInfo =
  (userData, response) => async (dispatch, getState) => {
    try {
      dispatch({ type: USER_ACTIONS.UPDATE_INFO.LOADING });
      // response.data.doc
      const { data } = await UserEndPoints.updateInfo(
        userData,
        getState().user_store.userData.token
      );

      response && response("your info updated successfully");

      const serverUserDate = saveUserData(
        data.data.user,
        getState().user_store.userData.token
      );
      dispatch({
        type: USER_ACTIONS.UPDATE_INFO.SUCCESS,
        payload: serverUserDate,
      });
      // getMe();
    } catch (error) {
      response && response("updating your info failed");

      const errorMessage = error?.response?.data?.message
        ? error?.response?.data?.message
        : error.message;

      response && response(errorMessage);

      // response &&
      //   response("if you want to try again say, login");

      dispatch({
        type: USER_ACTIONS.UPDATE_INFO.FALL,
        payload: errorMessage,
      });
    }
  };

export const logout = () => (dispatch) => {
  // localStorage.setItem("userData", null);
  removeCookie("userData");
  dispatch({ type: USER_ACTIONS.LOGOUT });
};

export const createUserError = (error) => (dispatch) =>
  dispatch({
    type: USER_ACTIONS.CREATE_USER_ERROR,
    payload: error,
  });

export const resetUserSuccess = () => (dispatch) =>
  dispatch({
    type: USER_ACTIONS.RESET_SUCCESS,
  });
