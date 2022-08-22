import { USER_ACTIONS } from "../constants";

const initialState = {
  loading: false,
  userData: null,
  error: null,
  userInput: { signUp: { isNotified: true }, login: {} },
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ACTIONS.UPDATE_FIELD:
      return {
        ...state,
        userInput: { ...state.userInput, ...action.payload },
      };
    case USER_ACTIONS.SIGN_UP.LOADING:
    case USER_ACTIONS.LOGIN.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
      };

    case USER_ACTIONS.SIGN_UP.SUCCESS:
    case USER_ACTIONS.LOGIN.SUCCESS:
    case USER_ACTIONS.AUTO_LOGIN:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: null,
      };

    case USER_ACTIONS.SIGN_UP.FALL:
    case USER_ACTIONS.LOGIN.FALL:
    case USER_ACTIONS.CREATE_USER_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case USER_ACTIONS.LOGOUT:
      return { ...state, userData: null };

    default:
      return state;
  }
};
