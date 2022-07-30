import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../redux";

export const useReduxActions = () => {
  const dispatch = useDispatch();

  const actions = bindActionCreators(actionCreators, dispatch);

  return actions;
};
