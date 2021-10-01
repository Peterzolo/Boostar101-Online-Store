import { ADD_TO_CART } from "../../contants/productActionTypes";

export const addTocartReducer = (state = { itemsInCart: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const newItem = action.payload;
      const existingItem = state.itemsInCart.find(
        (i) => i.product === newItem.product
      );
      if (existingItem) {
        return {
          ...state,
          itemsInCart: state.itemsInCart.map((i) =>
            i.product === existingItem.product ? newItem : i
          ),
        };
      } else {
        return { ...state, itemsInCart: [...state.itemsInCart, newItem] };
      }
    default:
      return state;
  }
};
