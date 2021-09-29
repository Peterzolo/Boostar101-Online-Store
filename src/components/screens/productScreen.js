import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Rating from "../Rating";
import Loading from "../message/Loading";
import Message from "../message/Message";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { productDetailAction } from "../../redux/actions/productActions";

const ProductScreen = (props) => {
  const getProductDetail = useSelector((state) => state.productDetails);
  const { loading, error, product } = getProductDetail;
  const dispatch = useDispatch();
  const productId = props.match.params.id;

  useEffect(() => {
    dispatch(productDetailAction(productId));
  }, [dispatch, productId]);

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

                  <li>
                    <button className="primary block">Add To Cart</button>
                  </li>
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
