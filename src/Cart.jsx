import React, { useState, useEffect } from "react";

const Cart = () => {
  const [isModalDisplayed, setIsModalDisplayed] = useState(false);

  useEffect(() => {
    console.log(isModalDisplayed);
  }, [isModalDisplayed]);

  const handleModalDisplay = () => {
    setIsModalDisplayed(!isModalDisplayed);
  };

  return (
    <div className="cart">
      <button className="cart-button" onClick={handleModalDisplay}>
        <img src="./cart.svg" className="cart-icon" />
      </button>

      {isModalDisplayed && (
        <div className="cart-modal">
          <h1>Shopping Cart</h1>
        </div>
      )}
    </div>
  );
};

export default Cart;
