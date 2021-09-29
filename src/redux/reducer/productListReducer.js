//import Loading from '../../components/message/Loading';

import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
} from "../../contants/productActionTypes";

//import data from '../../data'

export const productListReducer = (
  state = { loading: true, products: [] },
  action
) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { Loading: true };
    case GET_PRODUCTS_SUCCESS:
      return { loading: false, products: action.payload };
    case GET_PRODUCTS_FAILURE:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
  //return  {products : data.products}
};
