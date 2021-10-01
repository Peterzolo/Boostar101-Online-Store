import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import CartScreen from "./components/screens/CartScreen";
import HomeScreen from "./components/screens/HomeScreen";
import ProductScreen from "./components/screens/productScreen";
import { useSelector } from "react-redux";

const App = () => {
  const addToCart = useSelector((state) => state.cart);
  const { cartItems } = addToCart;
  console.log(cartItems);

  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <Link to="/" className="brand">
              Boostar101
            </Link>
          </div>
          <div>
            <Link to="/cart">Cart</Link>
            <Link to="/signin">SignIn</Link>
          </div>
        </header>
        <main>
          <Switch>
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/" component={HomeScreen} />
          </Switch>
        </main>

        <footer className="row center">Alrights reserved</footer>
      </div>
    </Router>
  );
};

export default App;
