import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Layout from "./components/Layout";
import Cart from "./components/Cart";
import Checkout from "./components/Checkout";
import Orders from "./components/Orders";
import Payment from "./components/Payment";
import Product from "./components/Product";
import Home from "./components/Home";
import "./App.css";


function App() {
  return (
    
    <Router>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/product" element={<Product/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/orders" element={<Orders/>} />
          <Route path="/payment" element={<Payment/>} />
        </Routes>
        </Layout>
    </Router>
  );
}
export default App;
