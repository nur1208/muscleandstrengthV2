import { MODAL_ACTIONS } from "../constants/modal";

const initialState = {
  isOpen: false,
  type: null,
  content: null,
};

export const modalReducer = (
  state = initialState,
  { type, payload }
) => {
  switch (type) {
    case MODAL_ACTIONS.UPDATE_MODAL_STATE:
      return {
        ...state,
        ...payload,
      };

    case MODAL_ACTIONS.CLOSE_MODAL:
      return {
        ...state,
        ...initialState,
      };
    default:
      return state;
  }
};
