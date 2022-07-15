import React from "react";
import Cart from "./components/Cart/Cart";

import Home from "./components/Home";
import Login from "./components/Login/Login";
import ProductList from "./components/ProductList/ProductList";
import SingleProduct from "./components/Products/SingleProduct";

import Register from "./components/Register/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import Success from "./components/StripeCheckout/Success";
import { useSelector } from "react-redux";


function App() {

  const userLoggedIn=useSelector((state)=>state.user.currentUser);
  return (
     <Router>
        <Routes>
          <Route path="/" element={<Home/>} />

         <Route exact path="/login" element={ userLoggedIn?<Navigate to="/" />:<Login/>} />
          <Route exact path="/register" element={ userLoggedIn?<Navigate to="/" />:<Register/>} />
          
          <Route exact path="/products" element={<ProductList/>} />
          <Route  path="/products/:category" element={<ProductList/>} />
          <Route  path="/product/:id" element={<SingleProduct/>} />
          <Route exact path="/cart" element={<Cart/>} />

          <Route exact path="/Success" element={<Success/>} />
          
          

        </Routes>   
     </Router>
  );
}

export default App;
