import React from "react";
import "../styles/Checkout.css";

const Checkout = ({ cart }) => {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="checkout">
      <h2>Checkout</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty. Add products to checkout.</p>
      ) : (
        <>
          <p>Total: ${total.toFixed(2)}</p>
          <button>Proceed to Payment</button>
        </>
      )}
    </div>
  );
};

export default Checkout;
