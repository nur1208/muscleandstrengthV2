import { MODAL_ACTIONS } from "../constants/modal";

export const updateModalState = (data) => {
  return (dispatch) =>
    dispatch({
      type: MODAL_ACTIONS.UPDATE_MODAL_STATE,
      payload: data,
    });
};

export const closeModal = () => {
  return (dispatch) =>
    dispatch({
      type: MODAL_ACTIONS.CLOSE_MODAL,
    });
};
