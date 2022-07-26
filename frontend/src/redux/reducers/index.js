import { combineReducers } from "redux";
import { articleReducer } from "./article";
import { modalReducer } from "./modal";
import { navbarReducer } from "./navbar";
import { productReducer } from "./product";
import { reviewReducer } from "./review";
import { userReducer } from "./user";

const reducers = combineReducers({
  navbar_store: navbarReducer,
  modal_store: modalReducer,
  product_store: productReducer,
  review_store: reviewReducer,
  user_store: userReducer,
  article_store: articleReducer,
});

export default reducers;
