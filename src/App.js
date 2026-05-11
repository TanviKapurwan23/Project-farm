import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<ProductList addToCart={addToCart} />}
          />
          <Route
            path="/product-detail/:id"
            element={<ProductDetail />}
          />
          <Route
            path="/cart"
            element={<Cart cart={cart} removeFromCart={removeFromCart} />}
          />
          <Route
            path="/checkout"
            element={<Checkout cart={cart} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
