import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "../../Pages/Home";
import Category from "../../Pages/Category";
import Product from "../../Pages/Products";
import NavBar2 from "../NavBar2/NavBar2";
import { CartProvider } from "../../Contexts/CartContext";
import Checkout from "../../Pages/Checkout";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <NavBar2 />
          <Switch>
            <Route exact path={`/shop`}>
              <Category />
            </Route>
            <Route exact path={`/category/:catId`}>
              <Category />
            </Route>
            <Route exact path={`/product/:prodId`}>
              <Product />
            </Route>
            <Route exact path={`/checkout`}>
              <Checkout />
            </Route>
            <Route exact path={`/`}>
              <Home />
            </Route>
            <Route path="*">NOT FOUND</Route>
          </Switch>
          <Footer />
        </CartProvider>
      </Router>
    </div>
  );
}

export default App;
