import React from "react";
import Product from "../Product";
import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "../message/Loading";
import Message from "../message/Message";
//import data from '../../data'

const HomeScreen = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get("http://localhost:5000/api/products");
        console.log("This is the data", data);
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {loading ? (
        <Loading></Loading>
      ) : error ? (
        <Message variant ="danger">{error}</Message>
      ) : (
        <div className="row center">
          {products.map((product) => (
            <Product key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default HomeScreen;
