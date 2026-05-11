import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Exotic Farm Products</h1>
      <p>Fresh, hand-picked strawberries, avocados, and more!</p>
      <Link to="/products">
        <button>Shop Now</button>
      </Link>
    </div>
  );
};

export default Home;
