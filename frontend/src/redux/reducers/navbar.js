import { NAVBAR_ACTIONS } from "../constants";

const initialState = {
  isOpen: false,
};

export const navbarReducer = (state = initialState, action) => {
  switch (action.type) {
    case NAVBAR_ACTIONS.UPDATE_IS_OPEN:
      return { ...state, isOpen: action.payload };

    default:
      return state;
  }
};
