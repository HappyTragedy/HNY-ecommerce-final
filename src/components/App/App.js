import React from "react";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from "../../Pages/Home";
import Category from "../../Pages/Category";
import Product from "../../Pages/Products";
import Footer from "../Footer/Footer";
import Hero from "../Hero/Hero";
import { CartProvider } from "../../Contexts/CartContext";
import Checkout from "../../Pages/Checkout";


function App() {
  return (
    <div className="App">
      <Router>
        <CartProvider>
          <Hero />
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
        </CartProvider>
        <Footer />
      </Router>
    </div >
  );
}

export default App;
