import { combineReducers } from "redux";
import { modalReducer } from "./modal";
import { navbarReducer } from "./navbar";

const reducers = combineReducers({
  navbar_store: navbarReducer,
  modal_store: modalReducer,
});

export default reducers;
