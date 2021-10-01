import React from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../redux/actions/cartActions";
//import { useSelector } from "react-redux";
//import Message from "../message/Message";
//import { Link } from "react-router-dom";

const CartScreen = (props) => {
  const dispatch = useDispatch();
  const productId = props.match.params.id;
  const quantity = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  //const cart = useSelector((state) => state.cart);
  //const { cartItems } = cart;

  useEffect(() => {
    if (productId) {
      dispatch(addToCartAction(productId, quantity));
    }
  }, [dispatch, productId, quantity]);

  //const handleRem/oveFromCart = (id) => {};

  return (
    <div className="row top">
      <h1>Cart Screen</h1>
      <p>
        Add To Cart : Product Id : {productId} Quantity : {quantity}
      </p>
    </div>
  );
};

export default CartScreen;
