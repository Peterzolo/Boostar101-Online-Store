import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "../reducer/rootReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const initialState = {
  //addToCart: {
  //  itemsInCart: localStorage.getItem("cartItems")
  //    ? JSON.parse(localStorage.getItem("cartItems"))
  //    : [],
  //},
};

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
