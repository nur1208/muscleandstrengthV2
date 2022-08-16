import { combineReducers } from "redux";
import { modalReducer } from "./modal";
import { navbarReducer } from "./navbar";
import { productReducer } from "./product";

const reducers = combineReducers({
  navbar_store: navbarReducer,
  modal_store: modalReducer,
  product_store: productReducer,
});

export default reducers;
