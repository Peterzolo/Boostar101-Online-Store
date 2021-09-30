import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CartScreen from "./components/screens/CartScreen";
import HomeScreen from "./components/screens/HomeScreen";
import ProductScreen from "./components/screens/productScreen";

const App = () => {
  return (
    <Router>
      <div className="grid-container">
        <header className="row">
          <div>
            <a className="brand" href="/">
              Boostar101
            </a>
          </div>
          <div>
            <a href="/cart">Cart</a>
            <a href="/signin">SignIn</a>
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
