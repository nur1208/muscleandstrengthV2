import { UserEndPoints } from "../../services";
import { setCookie } from "../../utils";
import { USER_ACTIONS } from "../constants/user";

const saveUserData = (userData, token) => {
  const serverUserDate = {
    ...userData,
    token,
  };

  setCookie("userData", JSON.stringify(serverUserDate), 3);

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

export const updateField = (data) => (dispatch) =>
  dispatch({ type: USER_ACTIONS.UPDATE_FIELD, payload: data });
