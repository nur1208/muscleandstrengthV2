import { NAVBAR_ACTIONS } from "../constants";

export const updateIsOpen = (data) => {
  return (dispatch) =>
    dispatch({
      type: NAVBAR_ACTIONS.UPDATE_IS_OPEN,
      payload: data,
    });
};
