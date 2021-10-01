import { combineReducers } from "redux";
import { addTocartReducer } from "./cartReducer";
import {
  productDetailsReducer,
  productListReducer,
} from "./productListReducer";

const rootReducer = combineReducers({
  productList: productListReducer,
  productDetails: productDetailsReducer,
  cart: addTocartReducer,
});

export default rootReducer;
