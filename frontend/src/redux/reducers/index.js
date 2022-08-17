import { combineReducers } from "redux";
import { modalReducer } from "./modal";
import { navbarReducer } from "./navbar";
import { productReducer } from "./product";
import { reviewReducer } from "./review";

const reducers = combineReducers({
  navbar_store: navbarReducer,
  modal_store: modalReducer,
  product_store: productReducer,
  review_store: reviewReducer,
});

export default reducers;
