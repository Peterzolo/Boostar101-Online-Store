import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Rating from "../Rating";
import Loading from "../message/Loading";
import Message from "../message/Message";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
//import { useHistory } from "react-router";

import { productDetailAction } from "../../redux/actions/productActions";

const ProductScreen = (props) => {
  const dispatch = useDispatch();
  //const history = useHistory();

  const getProductDetail = useSelector((state) => state.productDetails);
  const { loading, error, product } = getProductDetail;
  const [quantity, setQuantity] = useState(1);
  const productId = props.match.params.id;

  useEffect(() => {
    dispatch(productDetailAction(productId));
  }, [dispatch, productId]);

  const handleAddToCart = () => {
    props.history.push(`/cart/${productId}? quantity = ${quantity}`);
  };

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <div>
          <Link to="/">Back to Home</Link>
          <div className="row top">
            <div className="col-2">
              <img
                className="large"
                width="700"
                src={product.image}
                alt={product.name}
              />
            </div>
            <div className="col-1">
              <ul>
                <li>
                  <h1>{product.name}</h1>
                </li>

                <li>
                  <Rating
                    rating={product.rating}
                    numReviews={product.numReviews}
                  />
                </li>

                <li>Price : ${product.price}</li>
                <li>
                  Description :<p>{product.description}</p>
                </li>
              </ul>
            </div>

            <div className="col-1">
              <div className="card card-body">
                <ul>
                  <li>
                    <div className="row">
                      <div>Price</div>
                      <div className="price">{product.price}</div>
                    </div>
                  </li>

                  <li>
                    <div className="row">
                      <div>Status</div>
                      <div>
                        {product.countInStock > 0 ? (
                          <span className="success">Available</span>
                        ) : (
                          <span className="danger">Unavailable</span>
                        )}
                      </div>
                    </div>
                  </li>

                  {product.countInStock > 0 && (
                    <>
                      <li>
                        <di className="row">
                          <div>Quantity</div>
                          <div>
                            <select
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (item) => (
                                  <option key={item + 1} value={item + 1}>
                                    {item + 1}
                                  </option>
                                )
                              )}
                            </select>
                          </div>
                        </di>
                      </li>
                      <li>
                        <button
                          className="primary block"
                          onClick={handleAddToCart}
                        >
                          Add To Cart
                        </button>
                      </li>
                    </>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductScreen;
