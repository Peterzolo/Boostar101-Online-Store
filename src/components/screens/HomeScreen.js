import React from "react";
import Product from "../Product";
import { useEffect } from "react";
import Loading from "../message/Loading";
import Message from "../message/Message";
import { useSelector } from "react-redux";
import { productListAction } from "../../redux/actions/productActions";

import { useDispatch } from "react-redux";

const HomeScreen = () => {
  const productList = useSelector((state) => state.productList);

  const { loading, error, products } = productList;

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productListAction());
  }, [dispatch]);

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div className="row center">
          {products && products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
