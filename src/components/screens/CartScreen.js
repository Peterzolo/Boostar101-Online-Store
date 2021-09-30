import React from "react";

const CartScreen = (props) => {
  const productId = props.match.params.id;
  const quantity = props.location.search
    ? Number(props.location.search.split("=")[1])
    : 1;

  return (  
    <div>
      <h1>Cart Screen</h1>
      <p>
        ADD TO CART : productId : {productId} quantity : {quantity}
      </p>  
    </div>
  );
};

export default CartScreen;
