import axios from "axios";
import {
  GET_ALL_PRODUCTS,
  GET_PRODUCTS_FAILURE,
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCT_DETAILS,
  GET_PRODUCT_DETAILS_FAILURE,
  GET_PRODUCT_DETAILS_SUCCESS,
} from "../../contants/productActionTypes";

export const productListAction = () => async (dispatch) => {
  dispatch({ type: GET_ALL_PRODUCTS });

  try {
    const { data } = await axios.get("http://localhost:5000/api/products");
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_PRODUCTS_FAILURE, error: error.message });
  }
};

export const productDetailAction = (productId) => async (dispatch) => {
  dispatch({ type: GET_PRODUCT_DETAILS, payload: productId });
  try {
    const { data } = await axios.get(
      `http://localhost:5000/api/products/${productId}`
    );
    dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GET_PRODUCT_DETAILS_FAILURE,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
