import axios from "axios";
import { ADD_TO_CART } from "../../contants/productActionTypes";

//const url = "http://localhost:5000/api/products";

export const addToCartAction =
  (productId, quantity) => async (dispatch, getState) => {
    //const { data } = await axios.get(`${url}/${productId}`);
    const { data } = await axios(
      `http://localhost:5000/api/products/${productId}`
    );
    dispatch({
      type: ADD_TO_CART,
      payload: {
        name: data.name,
        image: data.image,
        price: data.price,
        countInStock: data.countInStock,
        product: data._id,
        quantity,
      },
    });

    localStorage.setItem(
      "itemsInCart",
      JSON.stringify(getState().cart.itemsInCart)
    );
  };
