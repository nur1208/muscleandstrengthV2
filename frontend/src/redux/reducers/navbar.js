import { NAVBAR_ACTIONS } from "../constants";

const initialState = {
  isOpen: false,
  customNavInfo: null,
};

export const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVBAR_ACTIONS.UPDATE_IS_OPEN:
      return {
        ...state,
        isOpen: action.payload.isOpen,
        openedType: action.payload.openedType,
      };

    case NAVBAR_ACTIONS.UPDATE_CUSTOM_NAV_INFO:
      return {
        ...state,
        customNavInfo: action.payload,
      };

    default:
      return state;
  }
};
