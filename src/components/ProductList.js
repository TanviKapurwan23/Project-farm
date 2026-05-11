import React from "react";
import { Link } from "react-router-dom";
import "../styles/ProductList.css"; // If you still want to use custom styles alongside Tailwind
import strawberryImage from "../assets/images/strawberry.jpeg";
import avocadoImage from "../assets/images/avocado.jpeg";

const ProductList = ({ addToCart }) => {
  const products = [
    { id: 1, name: "Strawberry", price: 10, image: strawberryImage },
    { id: 2, name: "Avocado", price: 15, image: avocadoImage },

    // Add more products here
  ];

  return (
    <div className="product-list grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {products.map((product) => (
        <div
          className="product bg-black-100 shadow-lg rounded-lg overflow-hidden"
          key={product.id}
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-semibold">{product.name}</h3>
            <p className="text-gray-600">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Add to Cart
            </button>
            <Link
              to={`/product-detail/${product.id}`}
              className="mt-2 inline-block text-blue-500 hover:underline"
            >
              View Details
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
