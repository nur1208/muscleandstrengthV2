import { COOKIES_CONSTANTS, getCookie } from "../../utils";
import { LOCAL_STORAGE_KEYS, USER_ACTIONS } from "../constants";

const checkout = localStorage.getItem(
  LOCAL_STORAGE_KEYS.CHECKOUT
)
  ? {
      ...JSON.parse(
        localStorage.getItem(LOCAL_STORAGE_KEYS.CHECKOUT)
      ),
      steps: [],
    }
  : {
      use_for_shipping: true,
      steps: [],
      addressBilling: {},
      addressShipping: {},
    };

const cookieIsDealAlert = getCookie(
  COOKIES_CONSTANTS.IS_DEAL_ALERT,
  false
);

const isDealAlert =
  cookieIsDealAlert === "" ? true : cookieIsDealAlert === "true";

const initialState = {
  loading: false,
  userData: null,
  error: null,
  success: null,
  userInput: {
    checkout,
    isDealAlert,
    signUp: { isNotified: true },
    login: {},
  },
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
    case USER_ACTIONS.UPDATE_INFO.LOADING:
    case USER_ACTIONS.GET_ME.LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        success: null,
      };

    case USER_ACTIONS.SIGN_UP.SUCCESS:
    case USER_ACTIONS.LOGIN.SUCCESS:
    case USER_ACTIONS.AUTO_LOGIN:
    case USER_ACTIONS.UPDATE_INFO.SUCCESS:
      return {
        ...state,
        loading: false,
        userData: action.payload,
        error: null,
        success: action.type !== USER_ACTIONS.AUTO_LOGIN,
      };

    case USER_ACTIONS.SIGN_UP.FALL:
    case USER_ACTIONS.LOGIN.FALL:
    case USER_ACTIONS.CREATE_USER_ERROR:
    case USER_ACTIONS.UPDATE_INFO.FALL:
    case USER_ACTIONS.GET_ME.FALL:
      return {
        ...state,
        loading: false,
        error: action.payload,
        success: null,
        currentAction: null,
      };

    case USER_ACTIONS.LOGOUT:
      return {
        ...state,
        userData: null,
        error: null,
        success: null,
      };

    case USER_ACTIONS.RESET_SUCCESS:
      return {
        ...state,
        success: null,
      };

    case USER_ACTIONS.CURRENT_ACTION:
      return {
        ...state,
        currentAction: action.payload,
      };

    case USER_ACTIONS.GET_ME.SUCCESS:
      return {
        ...state,
        loading: false,
        userData: state.userData
          ? { ...state.userData, ...action.payload }
          : { cart: [] },
        error: null,
      };
    default:
      return state;
  }
};
