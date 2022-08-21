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
      return {
        ...state,
        loading: true,
      };

    case USER_ACTIONS.SIGN_UP.SUCCESS:
    case USER_ACTIONS.AUTO_LOGIN:
      return {
        ...state,
        loading: false,
        userData: action.payload,
      };

    case USER_ACTIONS.SIGN_UP.FALL:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
