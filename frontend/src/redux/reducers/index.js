import { combineReducers } from "redux";
import { navbarReducer } from "./navbar";

const reducers = combineReducers({
  navbar_store: navbarReducer,
});

export default reducers;
